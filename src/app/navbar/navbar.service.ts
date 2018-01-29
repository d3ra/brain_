import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NavbarService {

  result:any;

  constructor(private _http: Http) { }
/*
  getProducts():Observable<Product[]> {
    return this._http.get("/api/products")
      .map(result => this.result = result.json());
  }

  getProduct(id: number | string):Observable<Product> {
  	//console.log("product.service: " + id);
  	return this._http.get("/api/products/" + id)
      .map(result => this.result = result.json());
  }
*/
}
