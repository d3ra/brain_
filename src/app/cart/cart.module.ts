import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CartListComponent }    from './cart-list.component';
import { CartCheckoutComponent }  from './cart-checkout.component';

import { CartService } from './cart.service';

import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [
    CartListComponent,
    CartCheckoutComponent
  ],
  providers: [ CartService ]
})

export class CartModule {}