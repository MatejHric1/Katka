namespace API.Entities
{
    public class Produkt
    {
        public int Id { get; set; }
        public string Meno { get; set; }
        public string Popis { get; set; }
        public long Cena { get; set; }
        public string FotkaUrl { get; set; }
        public string Typ { get; set; }
        public string Znacka { get; set; }
        public int QuantityInStock { get; set; }
    }
}