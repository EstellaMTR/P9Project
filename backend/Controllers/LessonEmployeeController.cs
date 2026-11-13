using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class LessonEmployeeController : ControllerBase
{
    private readonly LessonEmployeeService _lessonEmployeeService;

    public LessonEmployeeController(LessonEmployeeService lessonEmployeeService)
    {
        _lessonEmployeeService = lessonEmployeeService;
    }


    [HttpGet("course/{courseId:int}/employee/{employeeId:int}", Name = "GetCourseEmployeeByCourseIdEmployeeId")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetCourseEmployeeByCourseId(int courseId, int employeeId)
    {
        var result = await _lessonEmployeeService.GetLessonEmployeesByCourseIdAsync(courseId, employeeId);
        return result != null ? Ok(result) : NotFound();
    }

    [HttpPut("lesson/{lessonId:int}/employee/{employeeId:int}/thumb-count",
        Name = "UpdateThumbCountByLessonIdEmployeeId")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> UpdateThumbCountByLessonId(int thumbCount, int lessonId, int employeeId)
    {
        var result = await _lessonEmployeeService.UpdateThumbCountAsync(thumbCount, employeeId, lessonId);
        if (result.IsT0) return Ok();

        if (result.IsT1) return NotFound();

        return BadRequest();
    }

    [HttpPost("lesson/{lessonId:int}/employee/{employeeId:int}", Name = "CreateNewLessonEmployee")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateLessonEmployee(
        int lessonId, int employeeId, [FromBody] string taskAnswer)
    {
        var result = await _lessonEmployeeService
            .CreateLessonEmployeeAsync(lessonId, employeeId, taskAnswer);

        if (result.IsT0) return Ok();

        if (result.IsT1) return NotFound();

        return BadRequest();
    }
    
    
}