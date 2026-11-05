using Eurowind.Backend.Config;
using Eurowind.Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Eurowind.Backend.Seed;

public class DataSeeder
{
    // storing a reference to the database
    private readonly AppDbContext _dbContext;

    // through the dependency injection we get the database into this class
    public DataSeeder(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    // Seed initial application data.
    // Creates a course if none exists and creates lessons if the Lessons table is empty.
    public async Task SeedAsync()
    {

        // Try to find the first course in the database.
        // If no course exists, FirstOrDefaultAsync() returns null.
        var course = await _dbContext.Courses.FirstOrDefaultAsync();

        // Create the course only if it does not already exist
        if (course == null)
        {
            course = new Course(
                "Prompting Your AI",
                "Learn the fundamentals of prompting AI.\n\nIn this course, you'll learn how to write clear and effective prompts by completing a series of short challenges.\n\nDiscover how to define a goal, understand your audience and guide AI when information is missing.\n\nComplete each lesson to earn XP and improve your AI skills.\n",
                25,
                30
            );

            // Tell Entity Framework that we want to insert this course
            _dbContext.Courses.Add(course);

            // Execute the SQL INSERT and save the course to the database
            await _dbContext.SaveChangesAsync();
        }

        // Only create lessons if the Lessons table is empty.
        // This prevents duplicate lessons from being created every time
        // the application starts
        if (!await _dbContext.Lessons.AnyAsync())
        {
            // Create the lesson objects in memory.
            // course.Id is used to connect the lessons to the course
            var lesson1 = new Lesson(
                course.Id,
                "A Common Goal",
                "Learn how to define a clear goal when communicating with AI.",
                "Write a prompt that clearly explains what you want the AI to do."
            );
            var lesson2 = new Lesson(
                course.Id,
                "Lesson 2",
                "Description 2",
                "Task 2"
            );
            var lesson3 = new Lesson(
                course.Id,
                "Lesson 3",
                "Description 3",
                "Task 3"
            );

            // Add all lesson objects to Entity Framework so they can be saved to the database
            _dbContext.Lessons.AddRange(
                lesson1,
                lesson2,
                lesson3
            );

            // Execute the SQL INSERT statements and save all lessons
            await _dbContext.SaveChangesAsync();
        }
    }
}