using Eurowind.Backend.Config;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class CourseController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public CourseController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetCourses()
    {
        return Ok(_dbContext.Courses.ToList());
    }
    
}