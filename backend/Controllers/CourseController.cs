using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

/// Handles course-related API requests
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
    /// Gets the title of a course by its id
    [HttpGet("{id}/title")]
    public async Task<ActionResult<string>> GetCourseTitle(int id)
    {
        var title = await _courseService.GetTitleByIdAsync(id);

        if (title == null)
        {
            return NotFound();
        }

        return Ok(title);
    }
}