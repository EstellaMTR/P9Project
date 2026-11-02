using Eurowind.Backend.Config;
using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;

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
}