using Eurowind.Backend.Config;
using Microsoft.EntityFrameworkCore;

namespace Eurowind.Backend.Services;

/// Provides course-related database operations
public class CourseService
{
    private readonly AppDbContext _dbContext;

    public CourseService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    // Get the title of a course by its id
    public async Task<string?> GetTitleByIdAsync(int id)
    {
        return await _dbContext.Courses
            .Where(course => course.Id == id)
            .Select(course => course.Title)
            .FirstOrDefaultAsync();
    }    
}