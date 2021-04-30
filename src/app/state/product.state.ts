export enum ModifyProductActionTypes {
  NEW_PRODUCT = "[Product] New Product",
  SELECT_PRODUCT = "[Product] Select Product",
  EDIT_PRODUCT = "[Product] Edit Product",
  DELETE_PRODUCT = "[Product] Delete Product",
  PRODUCT_ADDED = "[Product] Product added",
  PRODUCT_UPDATED = "[Product] Product updated"
}

export enum QueryProductActionTypes {
  GET_ALL_PRODS = "[Product] Get All Products",
  GET_SEL_PRODS = "[Product] Get Selected Products",
  GET_AVA_PRODS = "[Product] Get Available Products",
  SEARCH_PRODS = "[Product] Search Products"
}

export interface ActionModifyEvent {
  type: ModifyProductActionTypes,
  payload?: any
}
export interface ActionQueryEvent {
  type: QueryProductActionTypes,
  payload?: any
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
