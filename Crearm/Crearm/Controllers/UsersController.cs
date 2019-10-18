using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crearm.Models;
using Microsoft.AspNetCore.Mvc;

namespace Crearm.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        ApplicationContext db;
        public UsersController(ApplicationContext context)
        {
            db = context;
            if (!db.DBSetUser.Any())
            {
                db.DBSetUser.Add(new User { Name = "iPhone X"});
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.DBSetUser.ToList();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            User product = db.DBSetUser.FirstOrDefault(x => x.Id == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post([FromBody]User product)
        {
            if (ModelState.IsValid)
            {
                db.DBSetUser.Add(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User product)
        {
            if (ModelState.IsValid)
            {
                db.Update(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User product = db.DBSetUser.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                db.DBSetUser.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        }
    }
}