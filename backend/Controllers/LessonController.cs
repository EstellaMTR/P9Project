using Eurowind.Backend.Entities;
using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Eurowind.Backend.DTOs.LessonDTOs;
using Eurowind.Backend.DTOs.CourseDTOs;

namespace Eurowind.Backend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class LessonController : ControllerBase
{
    private readonly LessonService _lessonService;

    public LessonController(LessonService lessonService)
    {
        _lessonService = lessonService;
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(LessonDTO), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LessonDTO>> GetByIdAsync(int id)
    {
        var result = await _lessonService.GetLessonWithCourseTitleAsync(id);

        return result != null ? Ok(result) : NotFound();
    }

    [HttpGet("course/{courseId:int}")]
    [ProducesResponseType(typeof(List<Lesson>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<List<Lesson>>> GetByCourseIdAsync(int courseId)
    {
        var result = await _lessonService.GetByCourseIdAsync(courseId);

        return result.Any() ? Ok(result) : NotFound();
    }
    
    [HttpPost("{lessonId:int}/start")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> StartLessonAsync(
        int lessonId,
        [FromQuery] int employeeId)
    {
        var result = await _lessonService.StartLessonAsync(
            lessonId,
            employeeId);

        return result ? Ok() : NotFound();
    }
    
    [HttpPost("{lessonId:int}/complete")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> CompleteLessonAsync(
        int lessonId,
        [FromQuery] int employeeId)
    {
        var result = await _lessonService.CompleteLessonAsync(
            lessonId,
            employeeId);

        return result ? Ok() : NotFound();
    }
    
    [HttpGet("course/{courseId:int}/progress")]
    [ProducesResponseType(typeof(CourseProgressDTO), StatusCodes.Status200OK)]
    public async Task<ActionResult<CourseProgressDTO>> GetCourseProgressAsync(
        int courseId,
        [FromQuery] int employeeId)
    {
        var result = await _lessonService.GetCourseProgressAsync(
            courseId,
            employeeId);

        return Ok(result);
    }
    
}