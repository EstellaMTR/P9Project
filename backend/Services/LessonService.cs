using Eurowind.Backend.Config;
using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using Eurowind.Backend.DTOs.LessonDTOs;
using Eurowind.Backend.DTOs.CourseDTOs;

namespace Eurowind.Backend.Services;

public class LessonService
{
    private readonly AppDbContext _dbContext;
    
    public LessonService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    // Getting a lesson by its id
    public async Task<Lesson?> GetByIdAsync(int id)
    {
        return await _dbContext.Lessons.FindAsync(id);
    }
    
    // Getting all lessons by course id
    public async Task<List<Lesson>> GetByCourseIdAsync(int courseId)
    {
        return await _dbContext.Lessons.Where(lesson => lesson.CourseId == courseId).ToListAsync();
    }
    public async Task<LessonDTO?> GetLessonWithCourseTitleAsync(int id)
    {
        return await (
            from lesson in _dbContext.Lessons
            join course in _dbContext.Courses
                on lesson.CourseId equals course.Id
            where lesson.Id == id
            select new LessonDTO(
                lesson.Title,
                lesson.Description,
                lesson.Task,
                lesson.CourseId,
                course.Title
            )
        ).FirstOrDefaultAsync();
    }
    
    public async Task<bool> StartLessonAsync(int lessonId, int employeeId)
    {
        var existingLessonEmployee = await _dbContext.LessonEmployees
            .FirstOrDefaultAsync(le =>
                le.LessonId == lessonId &&
                le.EmployeeId == employeeId);

        if (existingLessonEmployee != null)
        {
            return true;
        }

        var lesson = await _dbContext.Lessons
            .FirstOrDefaultAsync(l => l.Id == lessonId);

        var employee = await _dbContext.Employees
            .FirstOrDefaultAsync(e => e.Id == employeeId);

        if (lesson == null || employee == null)
        {
            return false;
        }

        var lessonEmployee = new LessonEmployee(lesson, employee);

        _dbContext.LessonEmployees.Add(lessonEmployee);

        await _dbContext.SaveChangesAsync();

        return true;
    }
    
    public async Task<bool> CompleteLessonAsync(int lessonId, int employeeId)
    {
        var lessonEmployee = await _dbContext.LessonEmployees
            .FirstOrDefaultAsync(le =>
                le.LessonId == lessonId &&
                le.EmployeeId == employeeId);

        if (lessonEmployee == null)
        {
            return false;
        }

        if (lessonEmployee.IsCompleted)
        {
            return true;
        }

        lessonEmployee.Complete();

        await _dbContext.SaveChangesAsync();

        return true;
    }
    
    public async Task<CourseProgressDTO> GetCourseProgressAsync(
        int courseId,
        int employeeId)
    {
        var totalLessons = await _dbContext.Lessons
            .CountAsync(l => l.CourseId == courseId);

        var completedLessons = await _dbContext.LessonEmployees
            .CountAsync(le =>
                le.Lesson.CourseId == courseId &&
                le.EmployeeId == employeeId &&
                le.IsCompleted);

        var progressPercentage = totalLessons == 0
            ? 0
            : (int)Math.Floor(
                (double)completedLessons / totalLessons * 100);

        return new CourseProgressDTO(
            courseId,
            totalLessons,
            completedLessons,
            progressPercentage
        );
    }
    
}

