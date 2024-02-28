using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProduktyController: ControllerBase 
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
            return await _context.Produkty.FindAsync(id);
        }

    }
}