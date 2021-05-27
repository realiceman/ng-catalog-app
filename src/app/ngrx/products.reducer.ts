import {Product} from "../Models/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial",
  NEW = "New",
  EDIT= "Edit",
  UPDATED = "Updated"
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product|null,
  currentAction: ProductsActions|null
}

const initState: ProductsState = {
  products: [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
}

export function productsReducer(state:ProductsState=initState, action: Action):ProductsState{
  switch (action.type){
    /*
   Get all the products
    */
    case ProductActionTypes.GET_ALL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action} //i clone the current state
    case ProductActionTypes.GET_ALL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    case ProductActionTypes.GET_ALL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
   Filter the product items having boolean "selected" at true
    */
    case ProductActionTypes.GET_SEL_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.GET_SEL_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    case ProductActionTypes.GET_SEL_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    Filter the product items having boolean "available" at true
     */
    case ProductActionTypes.GET_AVA_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.GET_AVA_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    case ProductActionTypes.GET_AVA_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    Search the product item(s) based on keyword
     */
    case ProductActionTypes.SEARCH_PRODS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.SEARCH_PRODS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    case ProductActionTypes.SEARCH_PRODS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    On select the product item from to make property "selected" true or false
     */
    case ProductActionTypes.ON_SEL_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_SEL_PROD_SUCCESS:
      let selectedProd:Product=(<ProductsActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>(p.id==selectedProd.id)?selectedProd:p);
      return {...state, dataState:ProductsStateEnum.LOADED, products:data, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_SEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
   On delete a product item
   */
    case ProductActionTypes.ON_DEL_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_DEL_PROD_SUCCESS:
      let deletedProd:Product=(<ProductsActions>action).payload
      let index=state.products.indexOf(deletedProd);
      let listProds=[...state.products];
      listProds.splice(index,1);
      return {...state, dataState:ProductsStateEnum.LOADED, products:listProds, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_DEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
   New product item
   */
    case ProductActionTypes.NEW_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.NEW_PROD_SUCCESS:
      return {...state, dataState:ProductsStateEnum.NEW, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_DEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    Save new product item
    */
    case ProductActionTypes.SAVE_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.SAVE_PROD_SUCCESS:
      let products=[...state.products];
      products.push((<ProductsActions>action).payload);
      return {...state, dataState:ProductsStateEnum.LOADED, products:products, currentAction:<ProductsActions>action}
    case ProductActionTypes.ON_DEL_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    Edit new product item
    */
    case ProductActionTypes.EDIT_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.EDIT_PROD_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, currentProduct:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    case ProductActionTypes.EDIT_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}
    /*
    Update new product item
    */
    case ProductActionTypes.UPDATE_PROD:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action}
    case ProductActionTypes.UPDATE_PROD_SUCCESS:
      let updatedProd:Product=(<ProductsActions>action).payload
      let updatedDatas:Product[]=state.products.map(p=>(p.id==updatedProd.id)?updatedProd:p);
      return {...state, dataState:ProductsStateEnum.UPDATED, products:updatedDatas, currentAction:<ProductsActions>action}
    case ProductActionTypes.UPDATE_PROD_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload, currentAction:<ProductsActions>action}

    default: return {...state, currentAction:<ProductsActions>action}
  }
}
