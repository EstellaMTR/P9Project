using Eurowind.Backend.Entities;
using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

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
    [ProducesResponseType(typeof(Lesson), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<int>> GetByIdAsync(int id)
    {
        var result = await _lessonService.GetByIdAsync(id);
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
    
}