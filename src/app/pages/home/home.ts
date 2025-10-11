import { Component, inject } from '@angular/core';
import { ProductService } from '../../core/Services/product-service';
import { NgFor, NgIf } from '@angular/common';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

 

}
