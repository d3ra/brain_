import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';

import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Component({
	selector: 'product-detail',
	templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;
  quantity: number;
  minQuantity: number;
  maxQuantity: number;

	constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {



    this.quantity = 1;
	  this.product$ = this.route.paramMap
	  .switchMap((params: ParamMap) => {
		  //console.log("product-detail.component:" + params.get('id'));
		  return this.productService.getProduct(params.get('code'))
	  });
  }

  addToCart(id: number | string, options: PurchaseOptions) {
    //console.log("Add to cart: " + id);
    console.log(localStorage.getItem('cart'));
    let cart = localStorage.getItem('cart');
    
  }

  addQuantity(num: number) {
    if ((num < 0 && this.quantity === 1) || (num > 0 && this.quantity === 9))
      return;
    this.quantity += num;
  }

}

interface PurchaseOptions {
  size: string,
  quantity: number
}
