using System.Collections.Generic;
using API.Entitiesvynutenie;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }

        public string ByuerId { get; set; }

        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Produkt produkt, int quantity)
        {
            if (Items.All(item => item.ProduktId != produkt.Id))  
            {
                Items.Add(new BasketItem{Produkt = produkt, Quantity = quantity});
            }

            var existingItem = Items.FirstOrDefault(item => item.ProduktId == produkt.Id);
            if(existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int produktId, int quantity) 
        {
            var item = Items.FirstOrDefault(item => item.ProduktId == produktId);
            if (item == null) return;
            item.Quantity -= quantity;
            if (item.Quantity == 0) Items.Remove(item);
        }
    }
}