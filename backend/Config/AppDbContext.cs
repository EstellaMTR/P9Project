using Microsoft.EntityFrameworkCore;
// namespace is kind of like Java's 'package'
// so in Java, this line would be:
// package eurowind.backend.config;
namespace Eurowind.Backend.Config;

// AppDbContext inherits from DbContext
public class AppDbContext : DbContext
{
    // Constructor
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}