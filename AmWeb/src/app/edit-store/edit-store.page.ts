import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/service/store.service';
import { store } from 'src/Models/stroe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.page.html',
  styleUrls: ['./edit-store.page.scss'],
})
export class EditStorePage implements OnInit {

  dataStore: store;
  IdeditStore: any;
 
  constructor(public activate: ActivatedRoute, public storeApi: StoreService, public formbuilder: FormBuilder, public route: Router) {
   
    this.IdeditStore = this.activate.snapshot.paramMap.get('_id');
    console.log(this.IdeditStore);

    this.storeApi.GetProductStoreByid(this.IdeditStore).subscribe(it => {
      console.log(it);
      this.dataStore = it;
      console.log(this.dataStore);
    })
  }

  ngOnInit() {
  }

  editlog() {
    this.storeApi.EditDataStore(this.IdeditStore, this.dataStore).subscribe(it => {
      console.log(it);
    });

  }
}
