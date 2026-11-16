namespace Eurowind.Backend.DTOs;

public record LessonEmployeeDTO(
    int LessonId,
    int EmployeeId,
    string? TaskAnswer,
    string? TaskFeedback,
    bool IsCompleted,
    int ThumbCount);