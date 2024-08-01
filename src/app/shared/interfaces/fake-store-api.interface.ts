import {Observable} from "rxjs";
import {ProductInterface} from "./products.interface";

export interface FakeStoreApiInterface {
  getAllProducts: () => Observable<Array<ProductInterface>>
}
