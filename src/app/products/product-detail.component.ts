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
  products$: Observable<Product[]>;
  products: Product[];
  
  styles: string[] = [];
  colors: {color: string, colorcode: string}[] = [];
  sizes: string[] = [];

  selectedProduct: Product;
  style: string;
  color: string;
  size: string;

  quantity: number;

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
          let foundStyle = false;
          let foundColor = false;
          let foundSize = false;
          // inizializza

          if (this.selectedProduct === undefined)
            this.selectedProduct = p;

          if(this.styles.length === 0) {
            this.styles.push(p.style);
            this.style = p.style;
          }
          if(this.colors.length === 0) {
            this.colors.push({color: p.color, colorcode: p.colorcode});
            this.color = p.color;
          }
          if(this.sizes.length === 0){
            this.sizes.push(p.size);
            this.size = p.size;
          }
          //debugger;
          // riempi
          for(let s of this.styles) {
            if(p.style === s)
              foundStyle = true;
          }
          if(!foundStyle)
            this.styles.push(p.style);

          for(let c of this.colors) {
            if(p.color === c.color)
              foundColor = true;
          }
          if(!foundColor)
            this.colors.push({color: p.color, colorcode: p.colorcode});
          for(let z of this.sizes) {
            if(p.size === z)
              foundSize = true;
          }
          if(!foundSize)
            this.sizes.push(p.size);
          //debugger;
        }

      },
      error => console.log("ERROR"),
      () => console.log("finish")
    );
  }

  selectStyle(style: string) {
    this.style = style;
    this.setSelected();
  }
  
  selectColor(color: string) {
    this.color = color;
    this.setSelected();
  }
  
  selectSize(size: string) {
    this.size = size;
    this.setSelected();
  }

  setSelected() {
    for (let p of this.products) {
      if (p.style === this.style && p.color === this.color && p.size === this.size)
        this.selectedProduct = p;
    }
    if(this.quantity > this.selectedProduct.quantity)
      this.quantity = this.selectedProduct.quantity;
  }

  addToCart(product: Product) {
    let newCart: Cart = new Cart();

    if(localStorage.getItem('my-cart') === null) {
      newCart.addProduct(product, this.quantity);
      localStorage.setItem('my-cart', JSON.stringify(newCart));
    } else {
      // se ho già un carrello
      let currentCart: Cart = JSON.parse(localStorage.getItem('my-cart'));
      // aggiungo i suoi oggetti al mio carrello
      for (let p of currentCart.products) {
        newCart.addProduct(p.product, p.quantity);
      }
      if(product.quantity > 0 && this.quantity > 0) {
        newCart.addProduct(product, this.quantity);
      }
      else {
        alert("Product not available!");
        return;
      }
      // salva il carrello sul localStorage
      localStorage.setItem('my-cart', JSON.stringify(newCart));
    }
    alert("Product " + product.code + " Added")
  }

  addQuantity(num: number) {
    if ((num < 0 && this.quantity <= 1) || (num > 0 && this.quantity === 9) || (num > 0 && this.quantity === this.selectedProduct.quantity))
      return;
    this.quantity += num;
  }
}
