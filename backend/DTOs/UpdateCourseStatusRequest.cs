using Eurowind.Backend.Entities;

namespace Eurowind.Backend.DTOs;

public record UpdateCourseStatusRequest(
    int CourseId,
    int EmployeeId,
    CourseStatus NewStatus
);