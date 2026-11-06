namespace Eurowind.Backend.DTOs;

/// <summary>
/// Represents course information returned to the frontend.
/// </summary>
public record CourseDTO(
    int Id,
    string Title,
    string Description,
    int XpReward,
    int Length
);
