import { Component, signal } from '@angular/core';
import { ProductService } from '../../../core/Services/product-service';
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';
import { categoryModel } from '../../../core/Services/models/Category.interface';
import { ProductDataModel } from '../../../core/Services/models/ProductModels/ProductModel.interface';
import { CommonModule } from '@angular/common';
import { editProduct } from '../../../core/Services/models/ProductModels/editProduct.interface';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProduct {
  productCategories = signal<categoryModel[]>([]);
  editForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    sku: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(0),
    stock: new FormControl(0),
    price: new FormControl(0),
    productImgUrl: new FormControl('')
  });

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.router.url.split('/').pop());
    this.getProductDetails(id);
    console.log(this.productCategories());
  }

  getProductDetails(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (product: ProductDataModel) => {
        console.log('Product details:', product);

      
      this.productService.getAllCategories().subscribe({
        next: (categories: categoryModel[]) => {
          this.productCategories.set(categories);
        },
        error: (err) => console.error('Error fetching categories:', err)
      });

        // ✅ Update existing form with values
        this.editForm.setValue({
          id: product.id,
          name: product.name,
          sku: product.sku,
          description: product.description,
          categoryId: product.categoryId,
          stock: product.stock,
          price: product.price,
          // productImgUrl: product.imageUrls
          productImgUrl:Array.isArray(product.imageUrls) && product.imageUrls.length > 0 
    ? product.imageUrls[0] 
    : ''
        });
      },
      error: (err) => console.error('Error fetching product details:', err)
    });
  }

onSubmit() {
  if (this.editForm.valid) {
    const formValue = this.editForm.value;
    console.log('Form submitted with values:', formValue);
   

    const id = Number(this.router.url.split('/').pop());

   const updatedProduct: editProduct = {
  Id: id,
  Name: formValue.name ?? '',
  Description: formValue.description ?? '',
  Price: formValue.price ?? 0,
  SKU: formValue.sku ?? '',
  Stock: formValue.stock ?? 0,
  CategoryId: formValue.categoryId ?? 0,
  productUrl: formValue.productImgUrl ?? ''
};

    this.productService.editProduct(updatedProduct).subscribe({
      next: (res) => {
        console.log('Product updated successfully', res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating product:', err);
      }
    });
  }
}}