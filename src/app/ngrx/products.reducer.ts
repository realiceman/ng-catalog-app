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
    /*
   Get all the products
    */
    case ProductActionTypes.GET_ALL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING} //i clone the current state
    case ProductActionTypes.GET_ALL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_ALL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /*
   Filter the product items having boolean "selected" at true
    */
    case ProductActionTypes.GET_SEL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_SEL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_SEL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /*
    Filter the product items having boolean "available" at true
     */
    case ProductActionTypes.GET_AVA_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_AVA_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_AVA_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /*
    Search the product item(s) based on keyword
     */
    case ProductActionTypes.SEARCH_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SEARCH_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /*
    On select the product item from to make property "selected" true or false
     */
    case ProductActionTypes.ON_SEL_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.ON_SEL_PROD_SUCCESS:
      let selectedProd:Product=(<ProductsActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>(p.id==selectedProd.id)?selectedProd:p);
      return {...state, dataState:ProductsStateEnum.LOADED, products:data}
    case ProductActionTypes.ON_SEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /*
   On delete a product item
   */
    case ProductActionTypes.ON_DEL_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.ON_DEL_PROD_SUCCESS:
      let deletedProd:Product=(<ProductsActions>action).payload
      let index=state.products.indexOf(deletedProd);
      let listProds=[...state.products];
      listProds.splice(index,1);
      return {...state, dataState:ProductsStateEnum.LOADED, products:listProds}
    case ProductActionTypes.ON_DEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}


    default: return {...state}
  }
}
