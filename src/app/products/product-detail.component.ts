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

  //product$: Observable<Product>;
  //product: Product;
  selected: Product;
  products$: Observable<Product[]>;
  products: Product[];
  styles: string[] = [];
  colors: string[] = [];
  sizes: string[] = [];
  quantity: number;
  minQuantity: number;
  maxQuantity: number;

	constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.quantity = 1;
    
    this.products$ = this.route.paramMap
    .switchMap((params: ParamMap) => {
      //console.log("product-detail.component:" + params.get('id'));
      return this.productService.getProductsByType(params.get('type'))
    });
    this.products$.subscribe(
      products => {
        this.products = products;
        // calcola styles, colors e sizes in base ai prodotti
        for(let p of products) {
          let foundStyle = 0;
          let foundColor = 0;
          let foundSize = 0;
          // inizializza
          if(this.styles.length === 0) {
            this.styles.push(p.style);
          }
          if(this.colors.length === 0) {
            this.colors.push(p.color);
          }
          if(this.sizes.length === 0){
            this.sizes.push(p.size);
          }
          debugger;
          // riempi
          for(let s of this.styles) {
            if(p.style === s)
              foundStyle++;
          }
          if(foundStyle === 0)
            this.styles.push(p.style);

          for(let c of this.colors) {
            if(p.color === c)
              foundColor++;
          }
          if(foundColor === 0)
            this.colors.push(p.color);
          for(let z of this.sizes) {
            if(p.size === z)
              foundSize++;
          }
          if(foundSize === 0)
            this.sizes.push(p.size);
          debugger;
        }

      },
      error => console.log("ERROR"),
      () => console.log("finish")
    );

    // calcola il prodotto selezionato in base a quali bottoni sono selected

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