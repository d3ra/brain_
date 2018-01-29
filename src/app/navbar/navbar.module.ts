import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import { ProductDetailComponent }  from './product-detail.component';

import { NavbarComponent } from './navbar.component';

import { NavbarService } from './navbar.service';

import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavbarRoutingModule
  ],
  declarations: [
    NavbarComponent
    //ProductListComponent,
    //ProductDetailComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [ NavbarService ]
})

export class NavbarModule {}