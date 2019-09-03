import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { product } from 'src/Models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  dataProduct: FormGroup;
  dataProductMd: product;
  editDataProduct: any;
  submit: boolean = false;

  constructor(public activate: ActivatedRoute, public productApi: ProductService, public formbuilder: FormBuilder, public route: Router) {
    this.editDataProduct = this.activate.snapshot.paramMap.get('_id');
    console.log(this.editDataProduct);
    this.dataProduct = this.formbuilder.group({
      'idProduct': [null, Validators.required],
      'nameProduct': [null, Validators.required],
      'typeProduct': [null, Validators.required],
      'priceProduct': [null, Validators.required],
      'totalProduct': [null, Validators.required]

    });

    this.productApi.GetProductByid(this.editDataProduct).subscribe(it => {
      console.log(it);
      this.dataProduct.patchValue(it)
      console.log(this.dataProduct.value);

    });

  }

  ngOnInit() {
  }

  log() {
    console.log(this.dataProduct.value);
    this.dataProductMd = this.dataProduct.value
    console.log(this.dataProductMd);

    this.productApi.EditDataProduct(this.editDataProduct, this.dataProductMd).subscribe(it => {
      console.log(it);

      this.route.navigate(['/product']);

    });

  }
}
