import { Component } from '@angular/core';
import { ProductService } from '../../core/Services/product-service';
import { ProductModel } from '../../core/Services/models/product.interface';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
 productForm!: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      stock: [null, [Validators.required, Validators.min(0.01)]],
      sku: [null, [Validators.required, Validators.maxLength(100)]],
      image: [null, [Validators.required]],
      category: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const formValue = this.productForm.value;

    const product: ProductModel = {
      id: 0,
      name: formValue.name,
      categoryName: formValue.category === '1' ? 'Mobile' : 'Apple Watchs',
      description: formValue.description,
      price: formValue.price,
      sku: formValue.sku,
      stock: formValue.stock,
      imageUrl: formValue.image,
      imageUrls: [formValue.image] // ✅ added back
    };

    this.productService.addProduct(product).subscribe({
      next: (data: any) => {
        console.log('✅ Product added successfully', data);
        this.productForm.reset();
      },
      error: (error: any) => {
        console.error('❌ Error adding product', error);
      }
    });
  }
}



 
