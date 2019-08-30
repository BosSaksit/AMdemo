import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  dataProduct : Product;

  constructor(public route: Router,public callApi:CallApiService) { }

  ngOnInit() {
    this.callApi.GetListAllProduct().subscribe(it =>{
      console.log(it);
      this.dataProduct = it;
      console.log(this.dataProduct);
      
      
    })
  }
  
  gotoOrder() {
    this.route.navigate(['/order']);
  }
}
