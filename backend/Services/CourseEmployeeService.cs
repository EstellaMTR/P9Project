using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;
using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using OneOf;
using OneOf.Types;

namespace Eurowind.Backend.Services;

public class CourseEmployeeService
{
    private readonly AppDbContext _dbContext;

    public CourseEmployeeService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    // UPDATE/PUT COURSE STATUS
    public async Task<OneOf<Success, NotFound, Error>> UpdateCourseStatusAsync(UpdateCourseStatusRequest request)
    {
        var (courseId, employeeId, newStatus) = request;

        if (!Enum.IsDefined(newStatus)) return new Error();

        var employee = await _dbContext.Employees.FindAsync(employeeId);
        if (employee == null) return new NotFound();

        var course = await _dbContext.Courses.FindAsync(courseId);
        if (course == null) return new NotFound();

        var courseEmployee = await _dbContext.CourseEmployees.FindAsync(courseId, employeeId);

        if (courseEmployee == null)
        {
            if (newStatus != CourseStatus.InProgress)
                return new Error();

            var newCourseEmployee = new CourseEmployee(course, employee);
            _dbContext.CourseEmployees.Add(newCourseEmployee);
        }
        else
        {
            if (courseEmployee.Status == newStatus)
                return new Success();

            if (courseEmployee.Status == CourseStatus.Finished)
                return new Error();

            if (newStatus == CourseStatus.Finished)
            {
                if (courseEmployee.Status != CourseStatus.InProgress)
                    return new Error();

                var courseLessons = _dbContext.Lessons.Where(lesson => lesson.CourseId == courseId);
                if (!await courseLessons.AnyAsync())
                    return new Error();

                var hasIncompleteLessons = await courseLessons.AnyAsync(lesson =>
                    !_dbContext.LessonEmployees.Any(progress =>
                        progress.LessonId == lesson.Id &&
                        progress.EmployeeId == employeeId &&
                        progress.IsCompleted));

                if (hasIncompleteLessons)
                    return new Error();

                employee.AddXp(course.XpReward);
            }

            courseEmployee.UpdateStatus(newStatus);
        }

        await _dbContext.SaveChangesAsync();
        return new Success();
    }

    // GET COURSES BY EMPLOYEE ID
    public async Task<List<CourseEmployeeDto>> GetCourseEmployeesByEmployeeIdAsync(int employeeId)
    {
        return await _dbContext.CourseEmployees
            .Where(ce => ce.EmployeeId == employeeId)
            .Select(ce => new CourseEmployeeDto(
                ce.CourseId,
                ce.Status
            ))
            .ToListAsync();
    }

    public async Task<List<CourseProgressDto>> GetInProgressCoursesAsync(
        int employeeId, CancellationToken cancellationToken)
    {
        var courses = await _dbContext.CourseEmployees
            .Where(enrollment => enrollment.EmployeeId == employeeId &&
                enrollment.Status == CourseStatus.InProgress)
            .Select(enrollment => new
            {
                enrollment.CourseId,
                enrollment.Course.Title,
                enrollment.Course.Description,
                enrollment.Course.XpReward,
                TotalLessons = _dbContext.Lessons.Count(lesson => lesson.CourseId == enrollment.CourseId),
                CompletedLessons = _dbContext.LessonEmployees.Count(progress =>
                    progress.EmployeeId == employeeId && progress.IsCompleted &&
                    progress.Lesson.CourseId == enrollment.CourseId)
            })
            .ToListAsync(cancellationToken);

        return courses
            .Select(course => new
            {
                Course = course,
                Progress = course.TotalLessons == 0 ? 0 : 100.0 * course.CompletedLessons / course.TotalLessons
            })
            .OrderByDescending(item => item.Progress)
            .ThenBy(item => item.Course.CourseId)
            .Select(item => new CourseProgressDto(
                item.Course.CourseId,
                item.Course.Title,
                item.Course.Description,
                item.Course.XpReward,
                item.Course.CompletedLessons,
                item.Course.TotalLessons,
                (int)Math.Round(item.Progress, MidpointRounding.AwayFromZero)))
            .ToList();
    }
}
