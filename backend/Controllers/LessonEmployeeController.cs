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
}