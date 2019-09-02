import { Component, OnInit } from '@angular/core';
import { StoreService } from "src/app/service/store.service";
import { store } from 'src/Models/stroe';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.page.html',
  styleUrls: ['./add-store.page.scss'],
})
export class AddStorePage implements OnInit {

  dataStore: FormGroup;
  submit: boolean = false;
  dataSt: store;

  public dataStoreAll: store;
  constructor(public storeApi: StoreService, public route: Router, public navCtrl: NavController, public formbuilder: FormBuilder) {
    this.dataStore = this.formbuilder.group({
      'idStore': [null, Validators.required],
      'addProductStore': [null, Validators.required]
    })
  }


  ngOnInit() {
  }

  get f() { return this.dataStore.controls; }

  async log() {
    this.submit = true;
    console.log(this.dataStore.value);
    console.log(this.dataStore);
    this.dataSt = this.dataStore.value;
    this.storeApi.AddStore(this.dataSt).subscribe(it => {
      console.log(it);
    });
  }

  public EditStore(id) {
    this.route.navigate(['/edit-store', { _id: id }]);
  }

  ok(){
    console.log("ok");
    
  }
  cancel(){
    console.log("cancel");
    
  }
}


