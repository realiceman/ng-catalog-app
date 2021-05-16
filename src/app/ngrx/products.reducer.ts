import {Product} from "../Models/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum
}

const initState: ProductsState = {
  products: [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state:ProductsState=initState, action: Action):ProductsState{
  switch (action.type){
    case ProductActionTypes.GET_ALL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING} //i clone the current state
    case ProductActionTypes.GET_ALL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_ALL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_SEL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_SEL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_SEL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_AVA_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_AVA_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_AVA_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SEARCH_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    default: return {...state}
  }
}
