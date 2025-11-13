import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductModel } from '../../core/Services/models/product.interface';
import { ProductService } from '../../core/Services/product-service';
import { categoryModel } from '../../core/Services/models/Category.interface';
import addProduct from '../../core/Services/models/addProduct.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule,ReactiveFormsModule,NgIf],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

    productForm!: FormGroup;
    productCategories = signal<categoryModel[]>([]);


  constructor(private fb: FormBuilder,private router:Router) {
    // ✅ Initialize the reactive form properly
    //    this.productForm = this.fb.nonNullable.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   sku: ['', [Validators.required, Validators.minLength(2)]],
    //   description: [''],
    //   category: ['', Validators.required],
    //   stock: [0, [Validators.required, Validators.min(0)]],
    //   price: [0, [Validators.required, Validators.min(1)]],
    //   imgUrl: ['', [Validators.required, Validators.minLength(2)]],
    // });

    this.productForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      sku: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      categoryId: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(1)]],
      productImgUrl: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit(){
    if(this.productForm.valid){
      // const newProduct: addProduct = this.productForm.value;
      const formValue = this.productForm.value;

      const newProduct: addProduct = {
        name: formValue.name,
        description: formValue.description,
        price: formValue.price,
        sku: formValue.sku,
        stock: formValue.stock,
        categoryId: formValue.category,
        productImgUrl: formValue.imgUrl
      };


      console.log('✅ Product added:', this.productForm.value);
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (response) => {
          console.log('✅ Product added successfully:', response);
          this.router.navigate(['/']); // Navigate to home or another page after successful addition
        },
        error: (error) => {
          console.error('❌ Error adding product:', error);
        }
      })
      // alert('Product added successfully!');
      this.productForm.reset();
    }
    else{
      console.warn('❌ Invalid form!');
      this.productForm.markAllAsTouched();
    }
  }


  // inject Product Service

  productService=inject(ProductService)

  getproductCategory(){
    this.productService.getAllCategories().subscribe((data:categoryModel[])=>{
      console.log(data)
      this.productCategories.set(data)
    })
  }


  ngOnInit(){
    this.getproductCategory()
  }


}
