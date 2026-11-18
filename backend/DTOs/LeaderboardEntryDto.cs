namespace Eurowind.Backend.DTOs;

public record LeaderboardEntryDto(
    int EmployeeId,
    string FirstName,
    string LastName,
    int XpAccumulated
);
