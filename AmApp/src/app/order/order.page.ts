import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Order } from '../Models/Order';




@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
      
  order:FormGroup;
  
  dataorder: Order;
  
  
  constructor(public alertController: AlertController,public route: Router,public callApi:CallApiService, public navCtrl: NavController, public formbuilder: FormBuilder) {

    this.order = this.formbuilder.group({
      'idOrder': [null],
      'idProduct': [null],
      'nameProduct':[null],
      'amountProduct': [null],
      'priceOrder': [null],
      'nameUser': [null],
      'telUser': [null],
      'addressUser': [null],
      'dateOrder': [null],
      'sendDate': [null],
      'status': [null],
     
    })
   }
   get f() { return this.order.controls; }


 

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>ยืนยันการสั่งซื้อ</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ok',
          handler: () => {
            
            
            console.log(this.order.value);
            console.log(this.order);
            this.dataorder = this.order.value;
            this.callApi.AddOrder(this.dataorder).subscribe(it =>{
              console.log(it);
              
            });
            
             
              

            this.route.navigate(['/list']);
          }
        }
      ]
    });

    await alert.present();
  } 


  ngOnInit() {
  }


}
