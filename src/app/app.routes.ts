import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { AddProduct } from './components/add-product/add-product';
import { AddCategory } from './pages/add-category/add-category';
import { EditProduct } from './components/edit-product/edit-product/edit-product';
import { LoginForm } from './pages/Auth/login-form/login-form';
import { SignupForm } from './pages/Auth/signup-form/signup-form';
import { ProductDetails } from './components/product-details/product-details/product-details';

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
        path:"productDetails/:id",component:ProductDetails
    },
    {
        path:"addcategory",component:AddCategory
    },
    {
        path:"login",component:LoginForm
    },
    {
        path:"signup",component:SignupForm
    },
];
