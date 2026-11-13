using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;
using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using OneOf;
using OneOf.Types;

namespace Eurowind.Backend.Services;

public class LessonEmployeeService
{
    private readonly AppDbContext _dbContext;
    private readonly EmployeeService _employeeService;

    public LessonEmployeeService(
        AppDbContext dbContext,
        EmployeeService employeeService)
    {
        _dbContext = dbContext;
        _employeeService = employeeService;
    }

    // GET LESSON-EMPLOYEES BY COURSE ID AND EMPLOYEE ID
    public async Task<List<LessonEmployeeDTO>> GetLessonEmployeesByCourseIdAsync(
        int courseId, int employeeId)
    {
        return await _dbContext.LessonEmployees
            .Where(le => le.Lesson.CourseId == courseId
                         && le.EmployeeId == employeeId)
            .Select(le => new LessonEmployeeDTO(
                le.LessonId,
                le.EmployeeId,
                le.TaskAnswer,
                le.TaskFeedback,
                le.IsCompleted,
                le.ThumbCount
            ))
            .ToListAsync();
    }

    // UPDATE/PUT THUMB COUNT
    public async Task<OneOf<Success, NotFound, Error>> UpdateThumbCountAsync(
        int thumbCount, int employeeId, int lessonId)
    {
        var lessonEmployee = await _dbContext.LessonEmployees
            .FindAsync(lessonId, employeeId);

        if (lessonEmployee == null)
            return new NotFound();

        lessonEmployee.UpdateThumbCount(thumbCount);

        var xpResult = await _employeeService.AddXpAsync(lessonId, employeeId);

        if (xpResult.IsT1)
            return new NotFound();

        return new Success();
    }

    // MAKE/POST NEW LESSONEMPLOYEE RECORD
    public async Task<OneOf<Success, NotFound, Error>> CreateLessonEmployeeAsync(
        int lessonId, int employeeId, string taskAnswer)
    {
        var employee = await _dbContext.Employees.FindAsync(employeeId);
        var lesson = await _dbContext.Lessons.FindAsync(lessonId);

        if (employee == null || lesson == null) return new NotFound();
        var existingRecord = await _dbContext.LessonEmployees
            .FindAsync(lessonId, employeeId);

        if (existingRecord != null)
            return new Error();

        var newLessonEmployee = new LessonEmployee(
            lesson, employee, taskAnswer);

        _dbContext.LessonEmployees.Add(newLessonEmployee);

        await _dbContext.SaveChangesAsync();

        return new Success();
    }
}