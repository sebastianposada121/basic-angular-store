import {Observable} from "rxjs";

export interface FakeStoreApiInterface {
  products: () => Observable<any>
}
