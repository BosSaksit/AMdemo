import { Component, OnInit } from '@angular/core';
import { StoreService } from "src/app/service/store.service";
import { store } from 'src/Models/stroe';
import { product } from 'src/Models/product';
import { NavController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { filter } from 'minimatch';


@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.page.html',
  styleUrls: ['./add-store.page.scss'],
})
export class AddStorePage implements OnInit {
  // store
  dataStore: FormGroup;
  submit: boolean = false;
  dataSt: store;

  // product
  dataProduct: FormGroup;
  dataPd: product;
  getDataProduct: any;
  dataProductAll : product;
  nameproduct : string;
  dataIdProduct:any


  public dataStoreAll: store;
  constructor(public storeApi: StoreService, public route: Router, public navCtrl: NavController, public formbuilder: FormBuilder, public productApi: ProductService,public activate:ActivatedRoute) {
    this.dataStore = this.formbuilder.group({
      'idStore': [null, Validators.required],
      'addProductStore': [null, Validators.required]
    });
    // this.productApi.GetProductByid(this.getDataProduct).subscribe(it => {
    //   console.log(it);
    //   this.getDataProduct =it;
    //   console.log(this.getDataProduct);
    // });
  }

  ngOnInit() {
    this.productApi.GetProductAll().subscribe((it) => {
      console.log(it);
      this.dataProductAll = it;
      console.log(this.dataProductAll);
    });
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

}


