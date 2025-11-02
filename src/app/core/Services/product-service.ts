import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  /**
   *
   */
  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<ProductModel[]>{
    const url="https://localhost:7125/api/Products/GetProducts"
    return this.http.get<ProductModel[]>(url)
  }

  addProduct(product:ProductModel):Observable<ProductModel>{
    const url="https://localhost:7125/api/Products/AddProduct";
    console.log("Adding product:", product);
    return this.http.post<ProductModel>(url,product)
  }

}
