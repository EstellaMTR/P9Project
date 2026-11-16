using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;
using Microsoft.EntityFrameworkCore;

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


    // GET ALL COURSES
    public async Task<List<CourseDTO>> GetAllCourses()
    {
        return await _dbContext.Courses.Select(course =>
            new CourseDTO(course.Id, course.Title, course.Description, course.XpReward, course.Length)).ToListAsync();

        // .Select(employee => new EmployeeDTO(employee.FirstName, employee.LastName, employee.Email, employee.XpAccumulated))
        // .ToListAsync();

        // The above is the same as doing this below, but above uses LINQ
        // var dtoList = new List<EmployeeDTO>();
        // foreach (var employee in employeeList)
        // {
        //     dtoList.Add(new EmployeeDTO(...));
        // }
        // return dtoList;
    }

    public async Task<List<CourseDTO>> GetCoursesByEmployeeId(int employeeId)
    {
        var allCourses = await GetAllCourses();

        // Get the IDs of courses belonging to this employee
        var courseIds = await _dbContext.CourseEmployees
            .Where(ce => ce.EmployeeId == employeeId)
            .Select(ce => ce.CourseId)
            .ToListAsync();

        // Filter the courses
        return allCourses
            .Where(course => courseIds.Contains(course.Id))
            .ToList();
    }
}