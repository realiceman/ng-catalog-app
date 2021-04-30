import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../Models/product.model";
import {ModifyProductActionTypes} from "../../../../state/product.state";
import {EventDrivenServices} from "../../../../services/event.driven.services";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?:Product;
 // @Output() evenEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  constructor(private eds: EventDrivenServices) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    //this.evenEmitter.emit({type: ProductActionTypes.SELECT_PRODUCT, payload:product});
    this.eds.publishModifyEvent({type: ModifyProductActionTypes.SELECT_PRODUCT,payload:product});
  }

  onDelete(product: Product) {  /* publish on the subject */
    //this.evenEmitter.emit({type: ProductActionTypes.DELETE_PRODUCT, payload:product});
    this.eds.publishModifyEvent({type: ModifyProductActionTypes.DELETE_PRODUCT,payload:product});
  }

  onUpdate(product: Product) {
    //this.evenEmitter.emit({type: ProductActionTypes.EDIT_PRODUCT, payload:product});
    this.eds.publishModifyEvent({type: ModifyProductActionTypes.EDIT_PRODUCT,payload:product});
  }
}
