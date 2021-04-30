import {Component, OnInit} from '@angular/core';
import {ModifyProductActionTypes, QueryProductActionTypes} from "../../../state/product.state";
import {EventDrivenServices} from "../../../services/event.driven.services";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eds: EventDrivenServices) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    //this.productEventEmitter.emit({type: ProductActionTypes.GET_ALL_PRODS});
    this.eds.publishQueryEvent({type: QueryProductActionTypes.GET_ALL_PRODS});
  }

  getSelectedProducts() {
    //this.productEventEmitter.emit({type: ProductActionTypes.GET_SEL_PRODS});
    this.eds.publishQueryEvent({type: QueryProductActionTypes.GET_SEL_PRODS});
  }

  getAvalaibleProducts() {
    //this.productEventEmitter.emit({type: ProductActionTypes.GET_AVA_PRODS});
    this.eds.publishQueryEvent({type: QueryProductActionTypes.GET_AVA_PRODS});
  }

  onNewProduct() {
    //this.productEventEmitter.emit({type: ProductActionTypes.NEW_PRODUCT});
    this.eds.publishModifyEvent({type: ModifyProductActionTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    //this.productEventEmitter.emit({type: ProductActionTypes.SEARCH_PRODS, payload: dataForm});
    this.eds.publishQueryEvent({type: QueryProductActionTypes.SEARCH_PRODS, payload: dataForm});
  }
}
