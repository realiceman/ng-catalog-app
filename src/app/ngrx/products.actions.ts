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
  SEARCH_PRODS_ERROR = "[Product] Search Products Error"
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

export type ProductsActions = GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
  GetSelProductsAction | GetSelProductsSuccessAction | GetSelProductsErrorAction |
  GetAvaProductsAction | GetAvaProductsSuccessAction | GetAvaProductsErrorAction |
  SearchProductsAction | SearchProductsSuccessAction | SearchProductsErrorAction;
