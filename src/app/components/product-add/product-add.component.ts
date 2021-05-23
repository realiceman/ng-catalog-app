import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {NewProductAction, SaveProductAction} from "../../ngrx/products.actions";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  state?:ProductsState;
  readonly ProductStateEnum=ProductsStateEnum;
  submitted:boolean=false;

  productFormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });

  constructor(private fb: FormBuilder, private store:Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state=>{
      this.state=state.prodsState;
      if (this.state?.dataState==ProductsStateEnum.NEW) {
        this.productFormGroup = this.fb.group({
          name: ["", Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          selected: [true, Validators.required],
          available: [true, Validators.required],
        });
      }
    })
  }

  onSaveProduct() {
    this.submitted=true;
    if(this.productFormGroup.invalid) return;
    this.store.dispatch(new SaveProductAction(this.productFormGroup.value));

  }

  newProduct() {
    this.submitted=false;
    this.productFormGroup.reset();
    this.store.dispatch(new NewProductAction({}));
  }
}
