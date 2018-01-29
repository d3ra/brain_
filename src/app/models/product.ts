export class Product {
  _id: string;
  name: string;
  code: string;
  price: number;
  color: string;
  size: {
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
  }
}
