import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetAvaProductsAction,
  GetSelProductsAction, ProductActionTypes,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {
 state:ProductsState|null=null;
 readonly productActionTypes=ProductActionTypes;

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.prodsState;
    });
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
