import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.services";
import {Product} from "../../Models/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {
  ActionModifyEvent, ActionQueryEvent,
  AppDataState,
  DataStateEnum, ModifyProductActionTypes, QueryProductActionTypes
} from "../../state/product.state";
import {Router} from "@angular/router";
import {EventDrivenServices} from "../../services/event.driven.services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$?: Observable<AppDataState<Product[]>>; //observable means you need to subscribe to get the datas if they come
  readonly DataStateEnum=DataStateEnum;

  constructor(private productService: ProductsService,
              private router: Router,
              private eds: EventDrivenServices) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.eds.sourceModifyEventSubjectObservable.subscribe((actionEvent:ActionModifyEvent)=>{
      this.onModifyActionEvent(actionEvent)
    });
    this.eds.sourceQueryEventSubjectObservable.subscribe((actionEvent:ActionQueryEvent)=>{
      this.onQueryActionEvent(actionEvent)
    });
  }

  getAllProducts() { //observable means you need to subscribe to get the datas if they come // and the view subscribe with "| async"
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

  onNewProduct() {
    this.router.navigateByUrl("newProduct");
  }

  onUpdate(p: Product) {
    this.router.navigateByUrl("editProduct/"+p.id);
  }

  onModifyActionEvent($event: ActionModifyEvent) {
    switch ($event.type){
      case ModifyProductActionTypes.NEW_PRODUCT: this.onNewProduct(); break;
      case ModifyProductActionTypes.SELECT_PRODUCT: this.onSelect($event.payload); break;
      case ModifyProductActionTypes.EDIT_PRODUCT: this.onUpdate($event.payload); break;
      case ModifyProductActionTypes.DELETE_PRODUCT: this.onDelete($event.payload); break;
    }
  }
  onQueryActionEvent($event: ActionQueryEvent) {
    switch ($event.type){
      case QueryProductActionTypes.GET_ALL_PRODS: this.getAllProducts(); break;
      case QueryProductActionTypes.GET_SEL_PRODS: this.getSelectedProducts(); break;
      case QueryProductActionTypes.GET_AVA_PRODS: this.getAvalaibleProducts(); break;
      case QueryProductActionTypes.SEARCH_PRODS: this.onSearch($event.payload); break;
    }
  }
}
