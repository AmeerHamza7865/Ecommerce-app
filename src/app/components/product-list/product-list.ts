import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, signal,Input } from '@angular/core';
import { ProductService } from '../../core/Services/product-service';
import { ProductModel } from '../../core/Services/models/product.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  @Input() isAdminDashboard: boolean = false;
  //  productList:ProductModel[]=[]
  isAdmin=true;
   productList = signal<ProductModel[]>([]);

  ProductData=inject(ProductService)

  ngOnInit(){
    this.getProduct()
  }
  getProduct(){
    this.ProductData.getAllProducts().subscribe((data:ProductModel[])=>{
      // console.log(data)
      this.productList.set(data)
      //  console.log("product-list",this.productList)
    })
  }
}
