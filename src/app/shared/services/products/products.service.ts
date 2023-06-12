import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environments} from "../../../../assets/environments/environments";
import {FakeStoreApiInterface} from "../../interfaces/fake-store-api.interface";
import {ProductInterface} from "../../interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements FakeStoreApiInterface{

  public productsCar: Array<ProductInterface> = new Array<ProductInterface>();

  private urls = {
    products: `${environments.FAKE_STORE_API}/products`
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public products(): Observable<Array<ProductInterface>> {
    return this.httpClient.get<Array<ProductInterface>>(this.urls.products);
  }


}
