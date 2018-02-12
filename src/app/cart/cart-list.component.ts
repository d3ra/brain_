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
			let currentCart = JSON.parse(localStorage.getItem('my-cart'));
			// aggiungo i suoi oggetti al mio carrello
			for (let p of currentCart.products) {
				newCart.addProduct(p);
			}
			/*
			// Inizializza il carrello per esempio
			let prod: Product = new Product();
			prod._id = "1";
			prod.name = "prodotto di prova";
			prod.price = 110;
			let prod2: Product = new Product();
			prod2.name = "prodotto 2"
			prod2._id = "2"
			prod2.price = 50;
			newCart.addProduct(prod);
			newCart.addProduct(prod2);
			*/
			// salva il carrello sul localStorage
			localStorage.setItem('my-cart', JSON.stringify(newCart));
		}
		this.cart = newCart;
		//console.log("POST: " + localStorage.getItem('my-cart'));
	}

	removeFromCart(code: number | string) {
		for(let prod of this.cart.products) {
			if(prod.code === code) {
				var toRemove: Product = prod; 
			}
		}
		//console.log("remove: " + toRemove.name);
		this.cart.removeProduct(toRemove);
		localStorage.setItem('my-cart', JSON.stringify(this.cart));
	}
}
