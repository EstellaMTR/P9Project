using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Eurowind.Backend.Migrations
{
    /// <inheritdoc />
    public partial class editedLessonEmployeeAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TaskAnswer",
                table: "LessonEmployees",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "LessonEmployees",
                keyColumn: "TaskAnswer",
                keyValue: null,
                column: "TaskAnswer",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "TaskAnswer",
                table: "LessonEmployees",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
