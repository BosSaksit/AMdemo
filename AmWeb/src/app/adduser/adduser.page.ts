import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/service/user.service";
import { user } from 'src/Models/user';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenService } from '../authen.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
  // dataUser: FormGroup;
  // submit: boolean = false;
  // dataUs: user;

  // constructor(public userApi: UserService, public route: Router, public navCtrl: NavController, public formbuilder: FormBuilder) {
  //   this.dataUser = this.formbuilder.group({
  //     'idUser': [null, Validators.required],
  //     'nameUser': [null, Validators.required],
  //     'username': [null, Validators.required],
  //     'password': [null, Validators.required],
  //     'telUser': [null, Validators.required],
  //     'levelUser': [null, Validators.required],
  //     'addressUser': [null, Validators.required]

  //   })
  // }
  // get f() { return this.dataUser.controls; }

  // async log() {
  //   this.submit = true;
  //   console.log(this.dataUser.value);
  //   console.log(this.dataUser);
  //   this.dataUs = this.dataUser.value;
  //   this.userApi.AddDataUser(this.dataUs).subscribe(it => {
  //     console.log(it);
  //   });
  // }

  // ngOnInit() {
  // }

  DataUser = {
    "users_id": "",
    "user_name": "",
    "u_username": "",
    "u_password": "",
    "user_tel": "",
    "user_level": "",
    "user_address": ""

  };

  constructor(public auth: AuthenService,public router:Router) { }

  ngOnInit() {
  }

  addDataUser(){
    console.log(this.DataUser);
    let dataFrom = new FormData();
    dataFrom.append("_Data",JSON.stringify(this.DataUser));
    dataFrom.append("Function_Name","addUser");
    console.log(dataFrom);
    this.auth.callApiUser(dataFrom).then((res)=>{
      console.log("sussess");
      
    }); 
  }

}
