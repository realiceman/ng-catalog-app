export enum ProductActionTypes {
  GET_ALL_PRODS = "[Product] Get All Products",
  GET_SEL_PRODS = "[Product] Get Selected Products",
  GET_AVA_PRODS = "[Product] Get Available Products",
  SEARCH_PRODS = "[Product] Search Products",
  NEW_PRODUCT = "[Product] New Product",
  SELECT_PRODUCT = "[Product] Select Product",
  EDIT_PRODUCT = "[Product] Edit Product",
  DELETE_PRODUCT = "[Product] Delete Product",
}

export interface ActionEvent {
  type: ProductActionTypes,
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
