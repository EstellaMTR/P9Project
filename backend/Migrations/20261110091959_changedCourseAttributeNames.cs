using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Eurowind.Backend.Migrations
{
    /// <inheritdoc />
    public partial class changedCourseAttributeNames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Xp_Reward",
                table: "Courses",
                newName: "XpReward");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "XpReward",
                table: "Courses",
                newName: "Xp_Reward");
        }
    }
}
