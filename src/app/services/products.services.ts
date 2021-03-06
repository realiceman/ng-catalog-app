import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../Models/product.model";


let host = environment.host;

@Injectable({providedIn: "root"})
export class ProductsService {
  constructor(private http:HttpClient) {
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(host+"/products");
  }

  getSelectedProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  getAvalaibleProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(host+"/products?available=true");
  }

  searchProducts(keyword:string): Observable<Product[]> {
    return this.http.get<Product[]>(host + "/products?name_like="+keyword);
  }

  select(product: Product): Observable<Product> {
    product.selected = !product.selected
    return this.http.put<Product>(host + "/products/"+product.id, product);
  }

  delete(product: Product): Observable<void> {
    return this.http.delete<void>(host + "/products/"+product.id);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(host + "/products/",product);
  }

  getProduct(id: number | undefined): Observable<Product>{
    return this.http.get<Product>(host+"/products/"+id);
  }

  updateProduct(product: Product, productId: number | undefined) {
    return this.http.put<Product>(host+"/products/"+productId, product);
  }
}
