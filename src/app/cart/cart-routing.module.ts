import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartCheckoutComponent } from './cart-checkout.component';
//import { ProductListComponent }    from './product-list.component';
//import { ProductDetailComponent }  from './product-detail.component';

const cartRoutes: Routes = [
	{path: 'checkout', component: CartCheckoutComponent}
  //{ path: 'products',  component: ProductListComponent },
  //{ path: 'product/:code', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
