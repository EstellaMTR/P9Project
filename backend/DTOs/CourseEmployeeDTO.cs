using Eurowind.Backend.Entities;

namespace Eurowind.Backend.DTOs;

public record CourseEmployeeDto(
    int CourseId,
    CourseStatus Status
);