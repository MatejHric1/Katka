using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;
using API.Entities;
using API.DTOs;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context) 
        {
            _context = context;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetriveBasket();

            if (basket == null) return NotFound();

            return MapBasketToDto(basket);
        }

        [HttpPost] 
        public async Task<ActionResult<BasketDto>> AddItemsToBasket(int produktId, int quantity)
        {
            var basket = await RetriveBasket();

            if (basket == null) basket = CreateBasket();

            var product = await _context.Produkty.FindAsync(produktId);

            if (product == null) return NotFound();

            basket.AddItem(product, quantity);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

             return BadRequest(new ProblemDetails{Title = "Problem saving item to basket"});
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int produktId, int quantity) 
        {
            var basket = await RetriveBasket();

            if (basket == null) return NotFound();

            basket.RemoveItem(produktId, quantity);

            var result = await _context.SaveChangesAsync () > 0;

            if(result) return Ok();

              return BadRequest(new ProblemDetails{Title = "Problém odsatrniť produkt z košíka."});

        }

        private async Task<Basket> RetriveBasket()
        {
            return await _context.Baskets
                    .Include(i => i.Items)
                    .ThenInclude(p => p.Produkt)
                    .FirstOrDefaultAsync(x => x.ByuerId == Request.Cookies["byuerId"]);
        }

        private Basket CreateBasket()
        {
            var byuerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)};
            Response.Cookies.Append("byuerId", byuerId, cookieOptions);
            var basket = new Basket{ByuerId = byuerId};
            _context.Baskets.Add(basket);
            return basket;
        }
        
        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                ByuerId = basket.ByuerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProduktId = item.ProduktId,
                    Meno = item.Produkt.Meno,
                    Cena = item.Produkt.Cena,
                    FotkaUrl = item.Produkt.FotkaUrl,
                    Typ = item.Produkt.Typ,
                    Znacka = item.Produkt.Znacka,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}