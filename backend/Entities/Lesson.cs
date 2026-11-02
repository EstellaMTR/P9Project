using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eurowind.Backend.Entities;

public class Lesson
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; private set;}
    //[ForeignKey("Course")]
    public int CourseId { get; private set;}
    public string Title {get; private set;}
    public string Description {get; private set;}
    public string Task { get; private set; }

    public Lesson(int courseId, string title, string description, string task)
    {
        CourseId = courseId;
        Title = title;
        Description = description;
        Task = task;
    }
    
}