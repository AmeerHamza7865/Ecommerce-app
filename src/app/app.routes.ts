import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { AddProduct } from './components/add-product/add-product';
import { AddCategory } from './pages/add-category/add-category';
import { EditProduct } from './components/edit-product/edit-product/edit-product';

export const routes: Routes = [
    {
        path:"",component:Home
    },
    {
        path:"about",component:About
    },
    {
        path:"contact",component:Contact
    },
    {
        path:"addproduct",component:AddProduct
    },
    {
        path:"editproduct/:id",component:EditProduct
    },
    {
        path:"addcategory",component:AddCategory
    },
];
