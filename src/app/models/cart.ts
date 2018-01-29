import {Product} from './product'

export class Cart {
  total: number;
  products: Array<Product>;

  addToCart(newProduct: Product) {
    this.products.push(newProduct);
    this.total += newProduct.price;
  }
}
