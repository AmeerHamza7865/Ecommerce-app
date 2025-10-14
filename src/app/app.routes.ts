import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { AddProduct } from './components/add-product/add-product';

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
];
