import { Component, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/Services/product-service';
import { ProductDataModel } from '../../../core/Services/models/ProductModels/ProductModel.interface';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})



export class ProductDetails {

    constructor(private router: Router,private productService: ProductService,) {}

    //  productDetails!:ProductDataModel;
    productDetails = signal<ProductDataModel | null>(null);

    ngOnInit() {
    const id = Number(this.router.url.split('/').pop());
    console.log("Product ID:", id);
     this.getProductDetails(id);
    // console.log(this.productCategories());
  }

  getProductDetails(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (product:ProductDataModel) => {
        console.log('Product details:', product.name);
        this.productDetails.set(product);
      },
      error: (err) => console.error('Error fetching product details:', err)
    });
  }
  addToCart(){
    console.log("Added to cart:", this.productDetails()?.name);
  }
}
