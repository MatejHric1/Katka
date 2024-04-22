using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDuplicateProductId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Produkty_ProduktId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "BasketItems");

            migrationBuilder.AlterColumn<int>(
                name: "ProduktId",
                table: "BasketItems",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Produkty_ProduktId",
                table: "BasketItems",
                column: "ProduktId",
                principalTable: "Produkty",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Produkty_ProduktId",
                table: "BasketItems");

            migrationBuilder.AlterColumn<int>(
                name: "ProduktId",
                table: "BasketItems",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "BasketItems",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Produkty_ProduktId",
                table: "BasketItems",
                column: "ProduktId",
                principalTable: "Produkty",
                principalColumn: "Id");
        }
    }
}
