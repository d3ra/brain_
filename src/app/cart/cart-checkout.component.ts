import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'cart-checkout',
	templateUrl: './cart-checkout.component.html',
})

export class CartCheckoutComponent implements OnInit {

	constructor(private route: ActivatedRoute) {

	}

	ngOnInit() {
	}

	pay() {
		alert("PAYPAL");
	}
}
