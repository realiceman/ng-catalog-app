import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionTypes} from "../../../state/product.state";
import {Product} from "../../../Models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$?: Observable<AppDataState<Product[]>>;
  @Output() productEvenEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productEvenEmitter.emit({type: ProductActionTypes.SELECT_PRODUCT, payload: p})
  }

  onDelete(p: Product) {
    this.productEvenEmitter.emit({type: ProductActionTypes.DELETE_PRODUCT, payload: p})
  }

  onUpdate(p: Product) {
    this.productEvenEmitter.emit({type: ProductActionTypes.EDIT_PRODUCT, payload: p})
  }

  onActionEvent($event: ActionEvent) {
    this.productEvenEmitter.emit($event);
  }
}
