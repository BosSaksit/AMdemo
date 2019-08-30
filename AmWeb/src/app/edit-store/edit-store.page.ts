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

  dataStore: FormGroup;
  dataStoreModel :store;
  editStore: any;
  submit: boolean = false;
  constructor(public activate: ActivatedRoute, public storeApi: StoreService, public formbuilder: FormBuilder, public route: Router) {
    this.editStore = this.activate.snapshot.paramMap.get('_id');
    console.log(this.editStore);

    this.dataStore = this.formbuilder.group({
      'idStore': [null, Validators.required],
      'editProductStore': [null,Validators.required]
    });

    this.storeApi.GetProductStoreByid(this.editStore).subscribe(it =>{
      console.log(it);
      this.dataStore.patchValue(it)
      console.log(this.dataStore.value);
      
      
    })
  }

  ngOnInit() {
  }
  
  log(){
    console.log(this.dataStore.value);
    this.dataStoreModel = this.dataStore.value
    console.log(this.dataStoreModel);
    
    this.storeApi.EditDataStore(this.editStore,this.dataStoreModel).subscribe(it =>{
      console.log(it);
    
    });
    
  }
}
