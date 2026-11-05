namespace Eurowind.Backend.Entities;

public class LessonEmployee
{
    public Lesson Lesson { get; private set; } = null!;
    public Employee Employee { get; private set; } = null!;
    
    public int LessonId {get; private set;}
    public int EmployeeId {get; private set;}
    
    public string TaskAnswer {get; private set;}
    public string? TaskFeedback {get; private set;}
    public int TryCount {get; private set;}
    public bool IsCompleted {get; private set;}
    public int ThumbCount {get; private set;}
    
    private LessonEmployee(){}

    public LessonEmployee(Lesson lesson, Employee employee, string taskAnswer)
    {
        Lesson = lesson;
        Employee = employee;
        TaskAnswer = taskAnswer;
        TryCount = 1;
        IsCompleted = false;
        ThumbCount = 0;
    }
}