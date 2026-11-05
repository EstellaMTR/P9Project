using System.ComponentModel.DataAnnotations.Schema;

namespace Eurowind.Backend.Entities;

public class CourseEmployee
{
    public Course Course { get; private set; } = null!;
    public Employee Employee { get; private set; } = null!;
    
    // FOREIGN KEYS
    // we dont need to annotate these as foreign keys as ef core automatically recognises them as foreign
    // keys, as we are following ef core naming conventions. I.e. CourseId, named after our Course.
    // if we named it SelectedCourse instead of CourseId, then we would need to include annotations
    public int CourseId { get; private set; }
    public int EmployeeId { get; private set; }
    public CourseStatus Status { get; private set; }

    private CourseEmployee() { }
    
    public CourseEmployee(Course course, Employee employee)
    {
        Course = course;
        Employee = employee;
        Status = CourseStatus.NotStarted;
    }
}