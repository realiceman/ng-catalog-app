import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.services";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../Models/product.model";
import {EventDrivenServices} from "../../services/event.driven.services";
import {ModifyProductActionTypes} from "../../state/product.state";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId?: number;
  submitted:boolean=false;

  productFormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService,
              private fb: FormBuilder,
              private eds: EventDrivenServices) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product => {
        this.productFormGroup = this.fb.group({
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        });
      });
  }

  updateProduct() {
    console.log(this.productId)
    this.submitted=true;
    if(this.productFormGroup.invalid) return;
    this.productService.updateProduct(this.productFormGroup.value, this.productId)
      .subscribe(product=>{
        this.eds.publishModifyEvent({type: ModifyProductActionTypes.EDIT_PRODUCT});
         alert("success");
      });
  }
}
