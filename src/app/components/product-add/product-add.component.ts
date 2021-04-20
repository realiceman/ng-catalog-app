import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.services";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  submitted:boolean=false;

  productFormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });

  constructor(private fb: FormBuilder, private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    });
  }

  onSaveProduct() {
    this.submitted=true;
    if(this.productFormGroup.invalid) return;
    this.productService.saveProduct(this.productFormGroup.value)
      .subscribe(data=>{
        alert("success")
      });
  }
}
