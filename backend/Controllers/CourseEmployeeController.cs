using Eurowind.Backend.DTOs;
using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class CourseEmployeeController : ControllerBase
{
    private readonly CourseEmployeeService _courseEmployeeService;

    public CourseEmployeeController(CourseEmployeeService courseEmployeeService)
    {
        _courseEmployeeService = courseEmployeeService;
    }

    [HttpPut(Name = "UpdateCourseEmployee")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult>
        UpdateCourseEmployee( //IActionResult allows the controller to return different HTTP responses
            [FromBody] UpdateCourseStatusRequest request)
    {
        var result = await _courseEmployeeService.UpdateCourseStatusAsync(request);
        return result.Match<IActionResult>(
            success => Ok(),
            notFound => NotFound(),
            error => BadRequest()
        );
    }

    [HttpGet("employee/{employeeId:int}", Name = "GetCourseEmployee")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<List<CourseEmployeeDto>>> GetCourseEmployee(int employeeId)
    {
        var courses = await _courseEmployeeService.GetCourseEmployeesByEmployeeIdAsync(employeeId);
        
        return Ok(courses);
    }
}