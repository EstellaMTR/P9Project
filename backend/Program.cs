using Eurowind.Backend.Config;
using Eurowind.Backend.Seed;
using Eurowind.Backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("AivenMySql");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        connectionString,
        new MySqlServerVersion(new Version(8, 4, 11))
    ));

// Add services to the container.
builder.Services.AddScoped<EmployeeService>(); // DO EVERY TIME CREATE A NEW SERVICE
builder.Services.AddScoped<LessonService>();
builder.Services.AddScoped<DataSeeder>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    // Keep numeric contracts numeric in both JSON and generated clients.
    options.JsonSerializerOptions.NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.Strict;
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.Strict;
});
builder.Services.AddOpenApi();

var app = builder.Build();

// Seed initial course and lesson data when running locally.
// The seeder only runs in Development and skips execution if data already exists.
if (app.Environment.IsDevelopment())
{
    using var scope = app.Services.CreateScope();

    var dataSeeder = scope.ServiceProvider.GetRequiredService<DataSeeder>();

    await dataSeeder.SeedAsync();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "Eurowind API");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
