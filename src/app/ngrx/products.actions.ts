import {Action} from "@ngrx/store";
import {Product} from "../Models/product.model";

export enum ProductActionTypes {
  GET_ALL_PRODS = "[Product] Get All Products",
  GET_ALL_PRODS_SUCCESS = "[Product] Get All Products Success",
  GET_ALL_PRODS_ERROR = "[Product] Get All Products Error",

  GET_SEL_PRODS = "[Product] Get Selected Products",
  GET_SEL_PRODS_SUCCESS = "[Product] Get Selected Products Success",
  GET_SEL_PRODS_ERROR = "[Product] Get Selected Products Error",

  GET_AVA_PRODS = "[Product] Get Available Products",
  GET_AVA_PRODS_SUCCESS = "[Product] Get Available Products Success",
  GET_AVA_PRODS_ERROR = "[Product] Get Available Products Error",

  SEARCH_PRODS = "[Product] Search Products",
  SEARCH_PRODS_SUCCESS = "[Product] Search Products Success",
  SEARCH_PRODS_ERROR = "[Product] Search Products Error",

  ON_SEL_PROD = "[Product] On Select Product",
  ON_SEL_PROD_SUCCESS = "[Product] On Select Product Success",
  ON_SEL_PROD_ERROR = "[Product] On Select Product Error",

  ON_DEL_PROD = "[Product] On Delete Product",
  ON_DEL_PROD_SUCCESS = "[Product] On Delete Product Success",
  ON_DEL_PROD_ERROR = "[Product] On Delete Product Error",

  NEW_PROD = "[Product] New Product",
  NEW_PROD_SUCCESS = "[Product] New Product Success",
  NEW_PROD_ERROR = "[Product] New Product Error",

  SAVE_PROD = "[Product] Save Product",
  SAVE_PROD_SUCCESS = "[Product] Save Product Success",
  SAVE_PROD_ERROR = "[Product] Save Product Error",
}

export class GetAllProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODS;

  constructor(public payload: any) {
  }
}

export class GetAllProductsSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODS_ERROR;

  constructor(public payload: string) {
  }
}

export class GetSelProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SEL_PRODS;

  constructor(public payload: any) {
  }
}

export class GetSelProductsSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SEL_PRODS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetSelProductsErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SEL_PRODS_ERROR;

  constructor(public payload: string) {
  }
}


export class GetAvaProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_AVA_PRODS;

  constructor(public payload: any) {
  }
}

export class GetAvaProductsSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_AVA_PRODS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAvaProductsErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_AVA_PRODS_ERROR;

  constructor(public payload: string) {
  }
}

export class SearchProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODS;

  constructor(public payload: string) {
  }
}

export class SearchProductsSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class SearchProductsErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODS_ERROR;

  constructor(public payload: string) {
  }
}


export class OnSelectProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_SEL_PROD;

  constructor(public payload: Product) {
  }
}

export class OnSelectProductSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_SEL_PROD_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class OnSelectProductErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_SEL_PROD_ERROR;

  constructor(public payload: string) {
  }
}


export class OnDeleteProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_DEL_PROD;

  constructor(public payload: Product) {
  }
}

export class OnDeleteProductSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_DEL_PROD_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class OnDeleteProductErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.ON_DEL_PROD_ERROR;

  constructor(public payload: string) {
  }
}

export class NewProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.NEW_PROD;

  constructor(public payload: any) {
  }
}

export class NewProductSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.NEW_PROD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class NewProductErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.NEW_PROD_ERROR;

  constructor(public payload: string) {
  }
}

export class SaveProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SAVE_PROD;

  constructor(public payload: Product) {
  }
}

export class SaveProductSuccessAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SAVE_PROD_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SaveProductErrorAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SAVE_PROD_ERROR;

  constructor(public payload: string) {
  }
}



export type ProductsActions = GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
  GetSelProductsAction | GetSelProductsSuccessAction | GetSelProductsErrorAction |
  GetAvaProductsAction | GetAvaProductsSuccessAction | GetAvaProductsErrorAction |
  SearchProductsAction | SearchProductsSuccessAction | SearchProductsErrorAction |
  OnSelectProductAction | OnSelectProductSuccessAction | OnSelectProductErrorAction |
  OnDeleteProductAction | OnDeleteProductSuccessAction | OnDeleteProductErrorAction |
  NewProductAction | NewProductSuccessAction | NewProductErrorAction |
  SaveProductAction | SaveProductSuccessAction | SaveProductErrorAction;
