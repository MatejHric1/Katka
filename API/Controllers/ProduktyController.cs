using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProduktyController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProduktyController(StoreContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Produkt>>> GetProdukty()
        {
            return await _context.Produkty.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Produkt>> GetProdukt(int id)
        {
            var produkt = await _context.Produkty.FindAsync(id);

            if (produkt == null) return NotFound();
            
            return produkt;
        }

        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
           return NotFound();
        }
    }
}