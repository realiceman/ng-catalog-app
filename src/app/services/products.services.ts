import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../Models/product.model";

@Injectable({providedIn: "root"})
export class ProductsService {
  constructor(private http:HttpClient) {
  }

  getAllProducts(): Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }

  getSelectedProducts(): Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  getAvalaibleProducts(): Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }
}
