namespace Eurowind.Backend.DTOs.CourseDTOs;

public record CourseProgressDTO(
    int CourseId,
    int TotalLessons,
    int CompletedLessons,
    int ProgressPercentage
);