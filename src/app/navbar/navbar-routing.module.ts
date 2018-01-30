import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }    from '../products/product-list.component';
import { HomeComponent } from '../home/home.component';
import { CartListComponent } from '../cart/cart-list.component';
//import { ProductDetailComponent }  from '../products/product-detail.component';

const navbarRoutes: Routes = [
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartListComponent },
  { path: '',  component: HomeComponent },
  //{ path: 'product/:code', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(navbarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavbarRoutingModule { }
