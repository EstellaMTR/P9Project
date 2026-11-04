using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;
// namespace is kind of like Java's 'package'
// so in Java, this line would be:
// package eurowind.backend.config;
namespace Eurowind.Backend.Config;

// we don't use repositories. Instead, we have one class which has all of the tables of our database, called AppDbContext.

// AppDbContext inherits from DbContext
public class AppDbContext : DbContext
{
    // Constructor
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
    
    // we are just basically saying that we have an employees table
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Lesson> Lessons { get; set; }
    
    public DbSet<Course> Courses { get; set; }
    
    public DbSet<CourseEmployee> CourseEmployees { get; set; }
    
    public DbSet<LessonEmployee> LessonEmployees { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<CourseEmployee>()
            .HasKey(ce => new { ce.CourseId, ce.EmployeeId });
        
        modelBuilder.Entity<LessonEmployee>()
            .HasKey(le => new { le.LessonId, le.EmployeeId });
    }
    
}