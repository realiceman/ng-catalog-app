import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.services";
import {Product} from "../../Models/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$?: Observable<AppDataState<Product[]>>;
  readonly DataStateEnum=DataStateEnum;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.products$ =
      this.productService.getAllProducts().pipe(
        map(data=>({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errMessage:err.message}))
      );
  }

  getSelectedProducts() {
    this.products$ =
      this.productService.getSelectedProducts().pipe(
        map(data=>({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errMessage:err.message}))
      );
  }

  getAvalaibleProducts() {
    this.products$ =
      this.productService.getAvalaibleProducts().pipe(
        map(data=>({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errMessage:err.message}))
      );
  }

  onSearch(dataForm: any) {
    this.products$ =
      this.productService.searchProducts(dataForm.keyword).pipe(
        map(data=>({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errMessage:err.message}))
      );
  }

  onSelect(p: Product) {
    this.productService.select(p)
      .subscribe(data=> {
        p.selected=data.selected;
      })
  }

  onDelete(p: Product) {
    let v=confirm("Do you want to delete "+p.name+" ?");
    if(v==true) {
      this.productService.delete(p)
        .subscribe(data => {
          this.getAllProducts();
        })
    }
  }
}
