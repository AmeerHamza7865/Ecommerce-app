import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.interface';
import { categoryModel } from './models/Category.interface';
import addProduct from './models/addProduct.interface';
import { addCategory } from './models/addCategory/addCategory';
import { editProduct } from './models/ProductModels/editProduct.interface';
import { ProductDataModel } from './models/ProductModels/ProductModel.interface';

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
  getProductById(id:number):Observable<ProductDataModel>{
    const url=`https://localhost:7125/api/Products/GetProductById/${id}`
    return this.http.get<ProductDataModel>(url)
  }

  editProduct(editproduct:editProduct):Observable<editProduct>{
    const url="https://localhost:7125/api/Products/UpdateProduct"
    return this.http.put<editProduct>(url,editproduct)
  }

  addProduct(product:addProduct):Observable<addProduct>{
    const url="https://localhost:7125/api/Products/AddProduct"
    return this.http.post<addProduct>(url,product)
  }

  getAllCategories():Observable<categoryModel[]>{
    const url="https://localhost:7125/api/Categories";
    return this.http.get<categoryModel[]>(url)
  }
  addCategory(category:addCategory):Observable<addCategory>{
    const url="https://localhost:7125/api/Categories";
    return this.http.post<addCategory>(url,category)
  }
}
