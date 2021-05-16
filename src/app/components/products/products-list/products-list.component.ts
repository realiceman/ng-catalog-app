import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionTypes} from "../../../state/product.state";
import {Product} from "../../../Models/product.model";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsState: ProductsState|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
