import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './Models/Product';
import { Order } from './Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  public static host: string = "https://bosjazz555.appspot.com/api/";
  constructor(public http: HttpClient) { }

  public GetListAllProduct() {
    return this.http.get<Order>(CallApiService.host+ 'Order/GetProductAll');
  }
  public AddOrder(data:Order){
    console.log(data);
    
    return this.http.post<Order>(CallApiService.host+ 'Order/AddOrder/' , data);
  }
  public GetProductById(Id:string){
    return this.http.get<Order>(CallApiService.host+'Order/GetProductById/'+ Id);
 
 }
}
