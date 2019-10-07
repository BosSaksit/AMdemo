import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/Models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  // dataUser: FormGroup;
  // dataUserz: user;
  // editDatauser: any;
  // submit: boolean = false;

  // constructor(public activate: ActivatedRoute, public userApi: UserService, public formbuilder: FormBuilder, public route: Router) {
  //   this.editDatauser = this.activate.snapshot.paramMap.get('_id');
  //   console.log(this.editDatauser);
  //   this.dataUser = this.formbuilder.group({
  //     'idUser': [null, Validators.required],
  //     'nameUser': [null, Validators.required],
  //     'username': [null, Validators.required],
  //     'password': [null, Validators.required],
  //     'telUser': [null, Validators.required],
  //     'levelUser': [null, Validators.required],
  //     'addressUser': [null, Validators.required]

  //   });

  //   this.userApi.GetUserByid(this.editDatauser).subscribe(it => {
  //     console.log(it);   
  //      this.dataUser.patchValue(it)
  //      console.log(this.dataUser.value);

  //     });

  // }

  // ngOnInit() {
  // }

  // log(){
  //   console.log(this.dataUser.value);
  //   this.dataUserz = this.dataUser.value
  //   console.log(this.dataUserz);

  //   this.userApi.EditDataUser(this.editDatauser,this.dataUserz).subscribe(it =>{
  //     console.log(it);

  //     this.route.navigate(['/user']);

  //   });

  // }

  DataUserId = {
    "users_id": "",

  };

  dataUser: any = {};

  constructor(public activate: ActivatedRoute, public auth: AuthenService, public router: Router) {
    this.DataUserId.users_id = this.activate.snapshot.paramMap.get('_id');
    console.log(this.DataUserId.users_id);
    this.getDataUserById();
  }

  ngOnInit() {
  }

  getDataUserById() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataUserId));
    dataForm.append("Function_Name", "getUserById");
    this.auth.callApiUser(dataForm).then((result) => {
      this.dataUser = result[0];
      console.log(this.dataUser);
    });
  }
  
  editDataProduct() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.dataUser));
    dataForm.append("Function_Name", "updateUser");
    this.auth.callApiUser(dataForm).then((result) => {
      console.log(result);
    });
  }



}
