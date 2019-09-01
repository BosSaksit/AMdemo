import { Component, OnInit } from '@angular/core';
import { StoreService } from "src/app/service/store.service";
import { store } from 'src/Models/stroe';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  dataStore: FormGroup;
  dataSt: store;

  IdclearStore: any;

  public dataStoreAll: store;
  constructor(public activate: ActivatedRoute, public storeApi: StoreService, public route: Router, public navCtrl: NavController, public formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.storeApi.GetProductStore().subscribe((it) => {
      console.log(it);
      this.dataStoreAll = it;
      console.log(this.dataStoreAll);
    });
  }

  public EditStore(id) {
    this.route.navigate(['/edit-store', { _id: id }]);
  }

  public ClearStores(id) {
    console.log(this.IdclearStore);
    this.storeApi.GetProductStoreByid(id).subscribe(it => {
      console.log(it);
      this.dataSt = it
      console.log(this.dataSt);
      this.storeApi.ClearDataStore(id, this.dataSt).subscribe(it => {
        console.log(it);
      });
    });



  }

}
