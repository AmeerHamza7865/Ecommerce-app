import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.interface';
import { categoryModel } from './models/Category.interface';

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

  getAllCategories():Observable<categoryModel[]>{
    const url="https://localhost:7125/api/Categories";
    return this.http.get<categoryModel[]>(url)
  }

}
