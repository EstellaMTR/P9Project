using Eurowind.Backend.DTOs;
using Eurowind.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Eurowind.Backend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class EmployeeController : ControllerBase
{
    private readonly EmployeeService _employeeService;
    public EmployeeController(EmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpPost(Name = "LoginEmployee")]
    [ProducesResponseType<int>(StatusCodes.Status200OK)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest)]
    public ActionResult<int> Login(EmployeeLoginRequest request)
    {
        var result = _employeeService.Login(request);
        if (result.IsT0)
        {
            return Ok(result.AsT0); // returns the HTTP code 200 (ok) and the integer, which is the employees id.
        }

        if (result.IsT1)
        {
            return NotFound(); // dont need to return anything other than not found
        }
        
        return BadRequest(); // can just return bad request
    }
}
