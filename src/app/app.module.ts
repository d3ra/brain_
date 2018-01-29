import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';

import { ProductsModule } from './products/products.module';

import { NavbarModule } from './navbar/navbar.module';

import { Product } from './models/product';
import { Cart } from './models/cart';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NavbarModule,
    ProductsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [Product, Cart],
  bootstrap: [AppComponent]
})

export class AppModule { }
