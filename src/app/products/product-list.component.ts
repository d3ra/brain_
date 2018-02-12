import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../models/product';
import { Cart } from '../models/cart';

import { ProductService } from './product.service';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {

	products$: Observable<Product[]>;
	products: Product[] = [];
	types: Product[] = [];
	private selectedId: string;


	constructor(private productService: ProductService, private route: ActivatedRoute) {

	}

	ngOnInit() {
		this.products$ = this.route.paramMap
			.switchMap((params: ParamMap) => {
				// (+) before `params.get()` turns the string into a number
        		//this.selectedId = +params.get('id');
        		this.selectedId = params.get('id');
        		return this.productService.getProducts();
		});

		this.products$.subscribe(
			product => {
				for (let p of product){
					this.products.push(p);
					let count: number = 0;
					if(this.types.length > 0) {
						for(let t of this.types) {
							if(p.type === t.type) 
								count++;
						}
					}
					if (count === 0)
						this.types.push(p);

					console.log(p);
				}
			},
			error => console.log("ERROR"),
			() => console.log("finish")
		);

	}
}
