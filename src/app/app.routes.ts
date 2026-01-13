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
import { AuthGuard } from './auth.guard';
import { AuthLayout } from './pages/layouts/auth-layout/auth-layout';
import { MainLayout } from './pages/layouts/main-layout/main-layout';
import { DashboardLayout } from './pages/layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    // {
    //     path: "", component: Home,
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: "about", component: About
    // },
    // {
    //     path: "contact", component: Contact
    // },
    // {
    //     path: "addproduct", component: AddProduct,
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: "editproduct/:id", component: EditProduct,
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: "productDetails/:id", component: ProductDetails
    // },
    // {
    //     path: "addcategory", component: AddCategory
    // },
    // {
    //     path: "login", component: LoginForm
    // },
    // {
    //     path: "signup", component: SignupForm
    // },
    // {
    //     path: "test",
    //     component: AddProduct,
    //     canActivate: [AuthGuard]
    // }
    

//     {
//     path: '',
//     component: AuthLayout,
//     children: [
//       { path: 'login', loadComponent: () => import('./pages/Auth/login-form/login-form').then(m => m.LoginForm) },
//       { path: 'signup', loadComponent: () => import('./pages/Auth/signup-form/signup-form').then(m => m.SignupForm) },
//     ]
//   },


//    {
//     path: '',
//     component: MainLayout,
//     children: [
//       { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
//       { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
//     ]
//   },



  {
    path: '',
    component: AuthLayout,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' }, // ✅ FIX
      { path: 'login', loadComponent: () => import('./pages/Auth/login-form/login-form').then(m => m.LoginForm) },
      { path: 'signup', loadComponent: () => import('./pages/Auth/signup-form/signup-form').then(m => m.SignupForm) },
    ]
  },

  // MAIN layout (WITH navbar)
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      // { path: 'Dashboard', loadComponent: () => import('./pages/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard), canActivate: [AuthGuard] },
      { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
     
      { path: 'productDetails/:id', loadComponent: () => import('./components/product-details/product-details/product-details').then(m => m.ProductDetails) },
      
    ]
  },

  {
    path: 'Dashboard',
    component: DashboardLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard), canActivate: [AuthGuard] },
      { path: 'addcategory', loadComponent: () => import('./pages/add-category/add-category').then(m => m.AddCategory), canActivate: [AuthGuard] },
      { path: 'addproduct', loadComponent: () => import('./components/add-product/add-product').then(m => m.AddProduct), canActivate: [AuthGuard] },
      { path: 'editproduct/:id', loadComponent: () => import('./components/edit-product/edit-product/edit-product').then(m => m.EditProduct), canActivate: [AuthGuard] },
    ],
    
  },  
  

  
  
  {
      path: '**',
      loadComponent: () =>
        import('./pages/pagenotfound/pagenotfound')
      .then(m => m.Pagenotfound)
}
    
    //   { path: '', redirectTo: 'login', pathMatch: 'full' }



];
