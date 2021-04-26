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
  @Output() evenEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.evenEmitter.emit({type: ProductActionTypes.SELECT_PRODUCT, payload:product});
  }

  onDelete(product: Product) {
    this.evenEmitter.emit({type: ProductActionTypes.DELETE_PRODUCT, payload:product});
  }

  onUpdate(product: Product) {
    this.evenEmitter.emit({type: ProductActionTypes.EDIT_PRODUCT, payload:product});
  }
}
