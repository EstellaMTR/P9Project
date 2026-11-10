using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;

namespace Eurowind.Backend.Services;

public class CourseService
{
    private readonly AppDbContext _dbContext;

    public CourseService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    /// <summary>
    ///     Gets a course by its id.
    /// </summary>
    /// <param name="id">The id of the course.</param>
    /// ///
    /// <returns>
    ///     The requested course as a CourseDTO if found; otherwise null.
    /// </returns>
    public async Task<CourseDTO?> GetByIdAsync(int id)
    {
        // Gets course from the database
        var course = await _dbContext.Courses.FindAsync(id);

        if (course == null) return null;

        // Mapping entity to DTO
        return new CourseDTO(
            course.Id,
            course.Title,
            course.Description,
            course.XpReward,
            course.Length
        );
    }
}