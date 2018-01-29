import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }    from '../products/product-list.component';
//import { ProductDetailComponent }  from '../products/product-detail.component';

const navbarRoutes: Routes = [
  { path: 'products',  component: ProductListComponent },
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
