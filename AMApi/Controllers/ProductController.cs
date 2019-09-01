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

    public class ProductController : ControllerBase
    {
        public static List<Product> DataProduct = new List<Product>
        {
            new Product {IdProduct = "1",NameProduct = "น้ำมนต์หลวงปู่เค็ม",TypeProduct = "เครื่องราง",PriceProduct = "5999",CostProduct = "2999" ,TotalProduct = "30"},
            new Product {IdProduct = "2",NameProduct = "น้ำยาล้างจานปู่เค็ม",TypeProduct = "ของใช้",PriceProduct = "299",CostProduct = "199" ,TotalProduct = "350"},
            new Product {IdProduct = "3",NameProduct = "ไข่แดงเค็มปู่เค็ม",TypeProduct = "อาหาร",PriceProduct = "9",CostProduct = "1" ,TotalProduct = "3000"},
            new Product {IdProduct = "4",NameProduct = "ขนมปู่เค็ม",TypeProduct = "ขนม",PriceProduct = "99",CostProduct = "29" ,TotalProduct = "500"},
            new Product {IdProduct = "5",NameProduct = "ครีมหลวงปู่เค็ม",TypeProduct = "เครื่องสำอาง",PriceProduct = "999",CostProduct = "499" ,TotalProduct = "90"},
            new Product {IdProduct = "6",NameProduct = "เสื้อยืดหลวงปู่เค็ม",TypeProduct = "เสื้อผ้า",PriceProduct = "999",CostProduct = "299" ,TotalProduct = "130"}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProductAll()
        {
            return DataProduct.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(string id)
        {
            return DataProduct.FirstOrDefault(it => it.IdProduct == id.ToString());
        }

        [HttpPost]
        public Product AddProduct([FromBody] Product Productx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new Product
            {
                IdProduct = id,
                NameProduct = Productx.NameProduct,
                TypeProduct = Productx.TypeProduct,
                PriceProduct = Productx.PriceProduct,
                TotalProduct = "0",
                CostProduct = Productx.CostProduct
            };

            DataProduct.Add(item);

            // User.Id = id;

            // data.Add(Userx);
            return item;
        }

        [HttpPut("{id}")]
        public Product EditProduct(string id, [FromBody] Product Productx)
        {
            var _id = DataProduct.FirstOrDefault(it => it.IdProduct == id.ToString());
            var item = new Product
            {
                IdProduct = id,
                NameProduct = Productx.NameProduct,
                TypeProduct = Productx.TypeProduct,
                PriceProduct = Productx.PriceProduct,
                TotalProduct = Productx.TotalProduct,
                CostProduct = Productx.CostProduct
            };
            DataProduct.Remove(_id);
            DataProduct.Add(item);
            return item;

        }

        [HttpDelete("{id}")]
        public void DeleteProduct(string id)
        {
            var delete = DataProduct.FirstOrDefault(it => it.IdProduct == id.ToString());
            DataProduct.Remove(delete);
        }

        [HttpPut("{id}")]
        public Product EditAddTotalProduct(string id, [FromBody] Product Productx)
        {
            var _id = DataProduct.FirstOrDefault(it => it.IdProduct == id.ToString());
            var getcheck = DataProduct.FirstOrDefault(it => it.IdProduct == id.ToString());
            int Total = int.Parse(getcheck.TotalProduct);
            int Add = int.Parse(Productx.TotalProduct);
            int Totals = 0;

            if (getcheck.TotalProduct == "0")
            {
                Total = 0;
                Totals = Total + Add;
            }
            else
            {
                Totals = Total + Add;
            }

            var item = new Product
            {
                IdProduct = id,
                NameProduct = Productx.NameProduct,
                TypeProduct = Productx.TypeProduct,
                PriceProduct = Productx.PriceProduct,
                TotalProduct = Totals.ToString(),
                CostProduct = Productx.CostProduct
            };
            DataProduct.Remove(_id);
            DataProduct.Add(item);
            return item;

        }

    }
}