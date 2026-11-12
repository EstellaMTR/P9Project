using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Eurowind.Backend.Services;

public class LessonEmployeeService
{
    private readonly AppDbContext _dbContext;

    public LessonEmployeeService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
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
}