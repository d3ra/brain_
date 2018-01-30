import {Product} from './product'

export class Cart {
  total: number;
  products: Array<Product>;

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.updateTotal();
  }

  removeProduct(product: Product) {
  	//find in array
  	//remove
  	this.updateTotal();
  }

  updateTotal() {
  	this.total = 0;
  	for (let prod of this.products) {
  		this.total += prod.price;
  	}
  }
}
