import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { Product } from '../Models/Product';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  dataOrder : Order;
  

  constructor(public route: Router,public callApi:CallApiService) { }

  ngOnInit() {
    this.callApi.GetListAllProduct().subscribe(it =>{
      console.log(it);
      this.dataOrder = it;
      console.log(this.dataOrder);  
    })
  }
  
  gotoOrder() {
    this.route.navigate(['/order']);
  }


  gotoOrderdetail(id){
    this.route.navigate(['/orderdetail',{_id :id}]);
  }
}
