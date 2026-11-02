using Eurowind.Backend.Config;
using Eurowind.Backend.DTOs;
using OneOf;
using OneOf.Types;

namespace Eurowind.Backend.Services;

public class EmployeeService
{
    // readonly here just means 'final'
    private readonly AppDbContext _dbContext;

    public EmployeeService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public OneOf<int, NotFound, Error> Login(EmployeeLoginRequest request)
    {
        // asking the database for the first employee where the email passed in matches an email in the db
        // otherwise return null (first or default auto returns null if no match found)
        var employee = _dbContext.Employees.FirstOrDefault(e => e.Email == request.email);
        if (employee == null) return new NotFound();

        // here we technically dont need to pass email through, as we have already checked above
        if (employee.Login(request.email, request.password)) return employee.Id;
        return new Error();
    }
}