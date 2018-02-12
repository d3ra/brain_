import {Product} from './product'

export class Cart {
  total: number;
  products: Array<Product>;

  constructor() {
  	this.total = 0;
  	this.products = new Array<Product>();
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.updateTotal();
  }

  removeProduct(product: Product) {
  	//find in array
  	let index:number = this.products.indexOf(product);
  	//remove
  	this.products.splice(index, 1);
  	this.updateTotal();
  }

  updateTotal() {
  	this.total = 0;
  	if(this.products.length > 0) {
	  	for (let prod of this.products) {
	  		this.total += prod.price;
	  	}
  	}
  }

  isEmpty() {
  	return (this.products.length === 0 && this.total === 0) 
  }
}
