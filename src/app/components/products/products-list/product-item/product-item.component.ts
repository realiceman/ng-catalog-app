import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../Models/product.model";
import {ActionEvent, ProductActionTypes} from "../../../../state/product.state";
import {Store} from "@ngrx/store";
import {OnDeleteProductAction, OnSelectProductAction} from "../../../../ngrx/products.actions";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?:Product;
  interimProduct?:Product;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.store.dispatch(new OnSelectProductAction(product));
  }

  onDelete(product: Product) {
    this.store.dispatch(new OnDeleteProductAction(product));
  }

  onUpdate(product: Product) {

  }
}
