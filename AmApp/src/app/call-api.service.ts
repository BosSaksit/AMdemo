import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  public static host: string = "https://bosjazz555.appspot.com/api/";
  constructor(public http: HttpClient) { }

  public GetListAllProduct() {
    return this.http.get<Product>(CallApiService.host+ 'Product/GetProductAll');
  }
}
