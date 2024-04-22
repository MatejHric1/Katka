using API.Entities;
using System.Collections.Generic;

namespace API.DTOs
{
    public class BasketDto
    {
        public int Id { get; set; }

        public string ByuerId { get; set; }

        public List<BasketItemDto> Items { get; set;}
    }
}