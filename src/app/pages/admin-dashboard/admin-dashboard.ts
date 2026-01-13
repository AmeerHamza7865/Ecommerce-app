import { Component } from '@angular/core';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ProductList],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

}
