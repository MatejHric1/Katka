namespace API.DTOs
{
    public class BasketItemDto
    {
        public int ProduktId { get; set; }

        public string Meno { get; set; }

        public long Cena { get; set; }

        public string FotkaUrl  { get; set; }

        public string Znacka { get; set; }

        public string Typ { get; set; }

        public int Quantity { get; set; }
    }
}