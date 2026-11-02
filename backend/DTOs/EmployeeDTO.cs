namespace Eurowind.Backend.DTOs;

// this is a record, not a calss.
// records are classes but they are easier to write as they take fewer characters.
// just a class, but faster
public record EmployeeDTO(string FirstName, string LastName, string Email);

// this is literally, somehow, exactly the same as:

// public class EmployeeDTO(string FirstName, string LastName, string Email)
// {
//     public string FirstName { get; init; } = FirstName;
//     public string LastName { get; init; } = LastName;
//     public string Email { get; init; } = Email;
//     // this deconstructor is just extra functionality, and we dont have to use it.
//     public void Deconstruct(out string FirstName, out string LastName, out string Email)
//     {
//         FirstName = this.FirstName;
//         LastName = this.LastName;
//         Email = this.Email;
//     }
// }