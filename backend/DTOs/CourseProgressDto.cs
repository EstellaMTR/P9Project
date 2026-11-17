namespace Eurowind.Backend.DTOs;

public record CourseProgressDto(
    int CourseId,
    string Title,
    string Description,
    int XpReward,
    int CompletedLessons,
    int TotalLessons,
    int ProgressPercent
);
