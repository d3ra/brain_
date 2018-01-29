import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../models/product';

import { ProductService } from './product.service';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
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
	}
}
