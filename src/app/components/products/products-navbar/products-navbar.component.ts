import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionTypes} from "../../../state/product.state";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.productEventEmitter.emit({type: ProductActionTypes.GET_ALL_PRODS});
  }

  getSelectedProducts() {
    this.productEventEmitter.emit({type: ProductActionTypes.GET_SEL_PRODS});
  }

  getAvalaibleProducts() {
    this.productEventEmitter.emit({type: ProductActionTypes.GET_AVA_PRODS});
  }

  onNewProduct() {
    this.productEventEmitter.emit({type: ProductActionTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    this.productEventEmitter.emit({type: ProductActionTypes.SEARCH_PRODS, payload: dataForm});
  }
}
