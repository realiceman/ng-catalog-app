import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionTypes} from "../../../state/product.state";
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetAvaProductsAction,
  GetSelProductsAction,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  getSelectedProducts() {
    this.store.dispatch(new GetSelProductsAction({}))
  }

  getAvalaibleProducts() {
    this.store.dispatch(new GetAvaProductsAction({}))
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword));
  }
}
