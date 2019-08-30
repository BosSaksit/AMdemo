import { Component, OnInit } from '@angular/core';
import { StoreService } from "src/app/service/store.service";
import { store } from 'src/Models/stroe';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  dataStore :FormGroup;
  submit :boolean = false;
  dataSt :store;

  clearStore:any;

  public dataStoreAll : store;
  constructor(public activate: ActivatedRoute,public storeApi:StoreService,public route:Router,public navCtrl:NavController,public formbuilder:FormBuilder) { 


    this.dataStore = this.formbuilder.group({
      'idStore': [null, Validators.required],
      'clearProductStore': [null,Validators.required]
    });

  }


  ngOnInit() {
    this.storeApi.GetProductStore().subscribe((it) => {
      console.log(it);
      this.dataStoreAll = it;
      console.log(this.dataStoreAll);
    });
  }

  get f() { return this.dataStore.controls; }
  
  public EditStore(id) {
    this.route.navigate(['/edit-store', { _id: id }]);
  }

  public ClearStores(id){

    this.clearStore = id;
    console.log(this.clearStore);

    this.storeApi.GetProductStoreByid(this.clearStore).subscribe(it =>{
      console.log(it);
      this.dataStore.patchValue(it)
      console.log(this.dataStore.value);
      
      
    })
  }

}
