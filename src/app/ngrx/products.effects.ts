import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.services";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  EditProductErrorAction, EditProductSuccessAction,
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction,
  GetAvaProductsErrorAction,
  GetAvaProductsSuccessAction,
  GetSelProductsErrorAction,
  GetSelProductsSuccessAction, NewProductSuccessAction,
  OnDeleteProductErrorAction,
  OnDeleteProductSuccessAction,
  OnSelectProductErrorAction,
  OnSelectProductSuccessAction,
  ProductActionTypes,
  ProductsActions, SaveProductErrorAction, SaveProductSuccessAction,
  SearchProductsErrorAction,
  SearchProductsSuccessAction, UpdateProductErrorAction, UpdateProductSuccessAction
} from "./products.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductsService, private effectActions:Actions) {

  }

  getAllProductsEffect:Observable<ProductsActions>=createEffect( //waiting to get updated by action (action is the observable) and create effect
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.GET_ALL_PRODS), // if action is of type GET_ALL_PRODS
      mergeMap( (action:ProductsActions) =>{ //take the received action
        return this.productsService.getAllProducts()  // call the service
          .pipe( // and when result is received => call new action with result
            map((products)=> new GetAllProductsSuccessAction(products)),
            catchError((error)=> of(new GetAllProductsErrorAction(error.message)))
          )
      })
    )
  );

  getSelProductsEffect:Observable<ProductsActions>=createEffect( //waiting to get updated by action (action is the observable) and create effect
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.GET_SEL_PRODS), // if action is of type GET_ALL_PRODS
      mergeMap( (action:ProductsActions) =>{ //take the received action
        return this.productsService.getSelectedProducts()  // call the service
          .pipe( // and when result is received => call new action with result
            map((products)=> new GetSelProductsSuccessAction(products)),
            catchError((error)=> of(new GetSelProductsErrorAction(error.message)))
          )
      })
    )
  );

  getAvaProductsEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.GET_AVA_PRODS),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.getAvalaibleProducts()
          .pipe(
            map((products)=> new GetAvaProductsSuccessAction(products)),
            catchError((error)=> of(new GetAvaProductsErrorAction(error.message)))
          )
      })
    )
  );

  searchProductsEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.SEARCH_PRODS),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products)=> new SearchProductsSuccessAction(products)),
            catchError((error)=> of(new SearchProductsErrorAction(error.message)))
          )
      })
    )
  );


  onSelectProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.ON_SEL_PROD),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.select(action.payload)
          .pipe(
            tap(product => console.log(product)),
            map((product)=> new OnSelectProductSuccessAction(product)),
            catchError((error)=> of(new OnSelectProductErrorAction(error.message)))
          )
      })
    )
  );


  onDeleteProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.ON_DEL_PROD),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.delete(action.payload)
          .pipe(
            tap(product => console.log(product)),
            map(()=> new OnDeleteProductSuccessAction(action.payload)),
            catchError((error)=> of(new OnDeleteProductErrorAction(error.message)))
          )
      })
    )
  );

  newProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.NEW_PROD),
      map( (action:ProductsActions) =>{
        return new NewProductSuccessAction({});
      })
    )
  );

  saveProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.SAVE_PROD),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.saveProduct(action.payload)
          .pipe(
            tap(product => console.log(product)),
            map((product)=> new SaveProductSuccessAction(product)),
            catchError((error)=> of(new SaveProductErrorAction(error.message)))
          )
      })
    )
  );

  editProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.EDIT_PROD),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.getProduct(action.payload)
          .pipe(
            tap(product => console.log(product)),
            map((product)=> new EditProductSuccessAction(product)),
            catchError((error)=> of(new EditProductErrorAction(error.message)))
          )
      })
    )
  );

  updateProductEffect:Observable<ProductsActions>=createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.UPDATE_PROD),
      mergeMap( (action:ProductsActions) =>{
        return this.productsService.updateProduct(action.payload)
          .pipe(
            tap(product => console.log(product)),
            map((product)=> new UpdateProductSuccessAction(product)),
            catchError((error)=> of(new UpdateProductErrorAction(error.message)))
          )
      })
    )
  );
}
