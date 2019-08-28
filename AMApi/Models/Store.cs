using System;

namespace AMApi.Models
{
    public class Store
    {
        public string IdStore { get; set; }
        public DateTime? AddProductStore { get; set; }
        public DateTime? EditProductStore { get; set; }
        public DateTime? ClearProductStore { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }

    }
}