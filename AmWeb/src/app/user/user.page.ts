import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/service/user.service";
import { user } from 'src/Models/user';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenService } from '../authen.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  listUser: any;
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
    this.getDataUserAll();
  }

  getDataUserAll() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getUserAll");
    this.auth.callApiUser(dataFrom).then((result) => {
      this.listUser = result;
      console.log(result);
      console.log(this.listUser);
    });
  }

  deleteUser(id) {
    this.DataUser.users_id = id;
    console.log(this.DataUser.users_id);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.DataUser));
    dataFrom.append("Function_Name", "deleteUser");
    this.auth.callApiUser(dataFrom).then((result) => {
      console.log(result);
      this.getDataUserAll();

    });
  }

  EditDataUser(id) {
    this.router.navigate(['/edit-user', { _id: id }]);
  }
  
  // public dataUserAll: user;

  // constructor(public activate: ActivatedRoute, public userApi: UserService, public route: Router, public navCtrl: NavController, public formbuilder: FormBuilder) { }

  // ngOnInit() {


  //   // this.userApi.GetUserAll().subscribe((it) => {
  //   //   console.log(it);
  //   //   this.dataUserAll = it;
  //   //   console.log(this.dataUserAll);
  //   // });
  // }

  // deleteUser(idUser) {
  //   this.userApi.DeleteDataUser(idUser).subscribe(it => {
  //     this.userApi.GetUserAll().subscribe((it) => {
  //       console.log(it);
  //       this.dataUserAll = it;
  //       console.log(this.dataUserAll);

  //     });
  //   });
  // }

  // public EditDataUser(id) {
  //   this.route.navigate(['/edit-user', { _id: id }]);
  // }
}
