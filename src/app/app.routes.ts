import { Routes } from '@angular/router';
import { Login } from './frontendUser/login/login';
import { Register } from './frontendUser/register/register';
import { Layout } from './frontendUser/layout/layout';
import { Products } from './frontendUser/products/products';
import { ProductCategory } from './frontendUser/product-category/product-category';
import { Cart } from './frontendUser/cart/cart';

export const routes: Routes = [
    {
        path:'',
        component:Login
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'products',
                component:Products
            },{
                path:'catrgory/:id',
                component:ProductCategory
            },{
                path:'cart',
                component:Cart
            }
        ]
    }
];
