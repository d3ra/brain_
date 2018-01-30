import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CartService } from './cart.service';

@Component({
	selector: 'cart-list',
	templateUrl: './cart-list.component.html',
})

export class CartListComponent implements OnInit {

	constructor(private cartService: CartService, private route: ActivatedRoute) {

	}

	ngOnInit() {
		/*
		this.products$ = this.route.paramMap
			.switchMap((params: ParamMap) => {
				// (+) before `params.get()` turns the string into a number
        		//this.selectedId = +params.get('id');
        		this.selectedId = params.get('id');
        		return this.productService.getProducts();
			});
			*/
	}
}
