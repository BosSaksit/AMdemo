using System;

namespace AMApi.Models
{
    public class Store
    {
        public string IdStore { get; set; }
        public string IdUser { get; set; }
        public string NameUser { get; set; }
        public string IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string StatusProduct { get; set; }
        public DateTime? AddProductStore { get; set; }
        public DateTime? EditProductStore { get; set; }
        public DateTime? ClearProductStore { get; set; }
       
    }
}