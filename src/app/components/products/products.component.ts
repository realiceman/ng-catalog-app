import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.services";
import {Product} from "../../Models/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionTypes} from "../../state/product.state";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$?: Observable<AppDataState<Product[]>>;
  readonly DataStateEnum=DataStateEnum;

  productState$: Observable<ProductsState>|null=null;
  ProductsStateEnum=ProductsStateEnum;
  constructor(private productService: ProductsService, private router: Router, private store:Store<any>) { }

  ngOnInit(): void {
    this.productState$=this.store.pipe(
      map((state)=> state.prodsState)
    );
  }


  onActionEvent($event: ActionEvent) {
    switch ($event.type){

    }
  }
}
