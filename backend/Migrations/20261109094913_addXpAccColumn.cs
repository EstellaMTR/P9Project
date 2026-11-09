using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Eurowind.Backend.Migrations
{
    /// <inheritdoc />
    public partial class addXpAccColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "XpAccumulated",
                table: "Employees",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "XpAccumulated",
                table: "Employees");
        }
    }
}
