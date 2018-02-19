import {Product} from './product'

export class Cart {
  total: number;
  //products: Array<Product>;
  products: Array<{
    product: Product,
    quantity: number
  }>;

  constructor() {
  	this.total = 0;
  	//this.products = new Array<Product>();
    this.products = new Array<{
      product: Product,
      quantity: number
    }>()
  }

  /*
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.updateTotal();
  }
  */

  addProduct(newProduct: Product, quantity: number) {
    if(newProduct.quantity <= 0 || quantity <= 0) {
      return;
    }
    let added = false;
    for(let p of this.products) {
      if(p.product.code === newProduct.code) {
        p.quantity += quantity;
        added = true;
      }
    }
    if(!added)
      this.products.push({ product: newProduct, quantity: quantity});
    this.updateTotal();
  }

  removeProduct(productToRem: Product, quantity?: number) {
    if(quantity === undefined || quantity <= 0)
      quantity = 1;

  	//find in array
  	let index: number = -1;
    let toRemove = -1;

    for(let p of this.products) {
      index++;
      if(p.product.code === productToRem.code) {
        p.quantity -= quantity;
        if(p.quantity <= 0)
          toRemove = index;
        break;
      }
    }
  	//remove
    if(toRemove >= 0)
  	  this.products.splice(toRemove, 1);
  	this.updateTotal();
  }

  updateTotal() {
  	this.total = 0;
  	if(this.products.length > 0) {
	  	for (let prod of this.products) {
	  		this.total += prod.product.price * prod.quantity;
	  	}
  	}
  }

  isEmpty() {
  	return (this.products.length === 0 && this.total === 0) 
  }
}
