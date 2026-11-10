using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eurowind.Backend.Entities;

public class Course
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int XpReward { get; set; }
    public int Length { get; set; }

    public Course(string title, string description, int xpReward, int length)
    {
        Title = title;
        Description = description;
        XpReward = xpReward;
        Length = length;
    }
    
    
}
