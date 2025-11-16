import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../core/Services/product-service';
import { ProductModel } from '../../core/Services/models/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  //  productList:ProductModel[]=[]

   productList = signal<ProductModel[]>([]);

  ProductData=inject(ProductService)

  ngOnInit(){
    this.getProduct()
  }
  getProduct(){
    this.ProductData.getAllProducts().subscribe((data:ProductModel[])=>{
      console.log(data)
      this.productList.set(data)
       console.log("product-list",this.productList)
    })
  }
}
