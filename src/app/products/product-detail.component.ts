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
  product: Product;
  quantity: number;
  minQuantity: number;
  maxQuantity: number;

	constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.quantity = 1;
	  this.product$ = this.route.paramMap
	  .switchMap((params: ParamMap) => {
		  //console.log("product-detail.component:" + params.get('id'));
		  return this.productService.getProduct(params.get('type'))
	  });

    this.product$.subscribe(
      product => {
        this.product = product;

      },
      error => console.log("ERROR"),
      () => console.log("finish")
    );

  }

  addToCart(product: Product) {
    let newCart: Cart = new Cart();

    if(localStorage.getItem('my-cart') === null) {
      newCart.addProduct(product);
      localStorage.setItem('my-cart', JSON.stringify(newCart));
    } else {
      // se ho già un carrello
      let currentCart = JSON.parse(localStorage.getItem('my-cart'));
      // aggiungo i suoi oggetti al mio carrello
      for (let p of currentCart.products) {
        newCart.addProduct(p);
      }
      newCart.addProduct(product);
      // salva il carrello sul localStorage
      localStorage.setItem('my-cart', JSON.stringify(newCart));
    }
    alert("Product " + product.code + " Added")
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
