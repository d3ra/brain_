import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CartService } from './cart.service';

import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Component({
	selector: 'cart-list',
	templateUrl: './cart-list.component.html',
})

export class CartListComponent implements OnInit {

	cart: Cart;

	constructor(private cartService: CartService, private route: ActivatedRoute) {

	}

	ngOnInit() {

		let newCart = new Cart();

		if(localStorage.getItem('my-cart') === null) {
			localStorage.setItem('my-cart', JSON.stringify(newCart));
		} else {
			// se ho già un carrello
			let currentCart: Cart = JSON.parse(localStorage.getItem('my-cart'));
			// aggiungo i suoi oggetti al mio carrello
			for (let p of currentCart.products) {
				newCart.addProduct(p.product, p.quantity);
			}
			localStorage.setItem('my-cart', JSON.stringify(newCart));
		}
		this.cart = newCart;
		//console.log("POST: " + localStorage.getItem('my-cart'));
	}

	removeFromCart(code: number | string, quantity?: number) {
		let toRemove: Product;
		for(let prod of this.cart.products) {
			if(prod.product.code === code) {
				toRemove = prod.product; 
			}
		}
		if(toRemove === undefined) {
			alert("Prod not found!")
			return;
		}
		console.log("remove: " + toRemove.name);
		this.cart.removeProduct(toRemove);
		localStorage.setItem('my-cart', JSON.stringify(this.cart));
	}
}
