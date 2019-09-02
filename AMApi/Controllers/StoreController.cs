using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace AMApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class StoreController : ControllerBase
    {

        public static List<Store> DataStore = new List<Store>
        {
            new Store {IdStore = "1" , AddProductStore = DateTime.Now},
             new Store {IdStore = "2" , EditProductStore = DateTime.Now},
              new Store {IdStore = "3" , ClearProductStore = DateTime.Now}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Store>> GetStoreAll()
        {
            return DataStore.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Store> GetStoreById(string id)
        {
            return DataStore.FirstOrDefault(it => it.IdStore == id.ToString());
        }

        [HttpPost]
        public Store AddStore([FromBody] Store Storex)
        {
            var id = Guid.NewGuid().ToString();
            var addDate = DateTime.Now;
            var item = new Store
            {
                IdStore = id,
                IdUser = Storex.IdUser,
                NameUser = Storex.NameUser,
                IdProduct = Storex.IdProduct,
                NameProduct = Storex.NameProduct,
                AddProductStore = addDate
            };

            DataStore.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public Store EditStore(string id, [FromBody] Store Storex)
        {
            var idx = DataStore.FirstOrDefault(it => it.IdStore == id.ToString());
            var editDate = DateTime.Now;
            var item = new Store
            {
                IdStore = id.ToString(),
                IdUser = Storex.IdUser,
                NameUser = Storex.NameUser,
                IdProduct = Storex.IdProduct,
                NameProduct = Storex.NameProduct,
                EditProductStore = editDate
            };

            DataStore.Add(item);
            return item;

        }

        [HttpPut("{id}")]
        public Store ClearStore(string id, [FromBody] Store Storex)
        {
            var idx = DataStore.FirstOrDefault(it => it.IdStore == id.ToString());
            var clearDate = DateTime.Now;
            var item = new Store
            {
                IdStore = id.ToString(),
                ClearProductStore = clearDate
            };

            DataStore.Add(item);
            return item;

        }

    }
}