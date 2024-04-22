using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Http.Headers;
using API.Entities;

namespace API.Entitiesvynutenie
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        // navigation proprties

        public int ProduktId { get; set; }

        public Produkt Produkt { get; set; }

        public int BasketId { get; set; }

        public Basket Basket { get; set; }
    }
}