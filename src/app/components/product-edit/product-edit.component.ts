import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.services";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EditProductAction, UpdateProductAction} from "../../ngrx/products.actions";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId?:number;
  formBuilt:boolean=false;
  readonly ProductStateEnum=ProductsStateEnum;
  state:ProductsState|null=null;
  submitted:boolean=false;
  productFormGroup=new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, private store:Store, private productService: ProductsService, private fb: FormBuilder) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productId));
    this.store.subscribe(state=>{
      // @ts-ignore
      this.state=state.prodsState;
      if (this.state?.dataState==ProductsStateEnum.LOADED){
          this.productFormGroup = this.fb.group({});
          let data=this.state.currentProduct;
          for (let f in data){
            // @ts-ignore
            this.productFormGroup.addControl(f, new FormControl(data[f], Validators.required));
          }
          this.formBuilt=true;
      }
    });
  }


  okUpdated() {

  }

  onUpdateProduct() {
    this.submitted=true;
    if (this.productFormGroup.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup.value));
  }
}
