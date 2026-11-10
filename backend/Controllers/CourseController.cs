using Eurowind.Backend.DTOs;
using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

/// <summary>
///     Handles course-related API requests.
/// </summary>
[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class CourseController : ControllerBase
{
    private readonly CourseService _courseService;

    public CourseController(CourseService courseService)
    {
        _courseService = courseService;
    }

    /// <summary>
    ///     Gets a course by its id.
    /// </summary>
    /// <param name="id">The id of the course.</param>
    /// <returns>
    ///     The course if found; otherwise a 404 response.
    /// </returns>
    [HttpGet("{id}", Name =  "GetCourseByCourseId")]
    [ProducesResponseType(typeof(CourseDTO), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<CourseDTO>> GetByIdAsync(int id)
    {
        var result = await _courseService.GetByIdAsync(id);

        return result != null ? Ok(result) : NotFound();
    }

    // GET ALL COURSES
    [HttpGet(Name = "GetAllCourses")]
    [ProducesResponseType<CourseDTO>(StatusCodes.Status200OK)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<List<CourseDTO>>> GetAllCourses()
    {
        var result = await _courseService.GetAllCourses();

        if (result.Count == 0) // checking if list is empty
            return NotFound();

        return Ok(result);
    }

    // GET ALL COURSES BY EMPLOYEE ID
    [HttpGet("courseEmployee/{employeeId}", Name = "GetCourseByEmployeeId")]
    [ProducesResponseType(typeof(List<CourseDTO>), StatusCodes.Status200OK)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<List<CourseDTO>>> GetCoursesByEmployeeId(int employeeId)
    {
        var result = await _courseService.GetCoursesByEmployeeId(employeeId);

        if (result.Count == 0) // checking if list is empty
            return NotFound();

        return Ok(result);
    }
}