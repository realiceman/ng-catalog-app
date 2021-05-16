import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../Models/product.model";
import {ActionEvent, ProductActionTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?:Product;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {

  }

  onDelete(product: Product) {

  }

  onUpdate(product: Product) {

  }
}
