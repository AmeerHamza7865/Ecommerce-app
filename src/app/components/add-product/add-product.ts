import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductModel } from '../../core/Services/models/product.interface';
import { ProductService } from '../../core/Services/product-service';
import { categoryModel } from '../../core/Services/models/Category.interface';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule,ReactiveFormsModule,NgIf],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

    productForm!: FormGroup;
    productCategories = signal<categoryModel[]>([]);

  constructor(private fb: FormBuilder) {
    // ✅ Initialize the reactive form properly
       this.productForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      category: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(1)]],
      imgUrl: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit(){
    if(this.productForm.valid){
      const newProduct: ProductModel = this.productForm.value;
      console.log('✅ Product added:', newProduct);
      alert('Product added successfully!');
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
