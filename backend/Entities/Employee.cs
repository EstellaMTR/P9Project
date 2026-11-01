using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eurowind.Backend.Entities;

public class Employee
{
    // private set means we can only 'set' the mail from a function within this Entity
    // domain-driven design; similar conceptually to SU - shares many of the same principles
    
    // as a comprehensive design idea, our domain objects should only allow operations
    // which are valid. Therefor, setters should be private, such that the value can only be changed
    // using a method designed for it. 
    // so in the email example, we would need to make a function to allow users to update their email.
    // But 'updating an email' is outside the scope of our project, so we wont do that. It will only ever be set once
    // in our constructor. So the setter should still be private here. We just wont make a function to set it.
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; private set; }
    public string Email {get; private set;}
    public string FirstName {get; private set;}
    public string LastName {get; private set;}
    public string Password {get; private set;}

    // private Employee() // EF core needs an empty constructor. You can have a public one with parameters also :)
    // {
    // }
    public Employee(string email, string firstName, string lastName, string password)
    {
        Email = email;
        FirstName = firstName;
        LastName = lastName;
        Password = password;
    }

    public bool Login(string email, string password)
    {
        return Email == email && Password == password;
    }
}