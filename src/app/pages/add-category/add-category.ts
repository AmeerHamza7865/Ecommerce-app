import { Component, NgModule } from '@angular/core';
import { ProductService } from '../../core/Services/product-service';
import { addCategory } from '../../core/Services/models/addCategory/addCategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css'
})
export class AddCategory {

  constructor(private productService:ProductService){

  }

  addCategory(data:addCategory){
    const category={
      name:data.name,
      slug:data.slug
    };

    this.productService.addCategory(category).subscribe({
      next:(res:addCategory)=>{
        console.log("Category added successfully",res);
      },
      error:(err:any)=>{
        console.error("Error adding category",err);
      }
    })  ;
  }
}
