import { Component } from '@angular/core';
import {ProductsService} from "../../../shared/services/products/products.service";
import {ProductInterface} from "../../../shared/interfaces/products.interface";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public title: string = 'Thanks for trusting us';

  public formGroup: FormGroup<{name: FormControl<string | null>, email: FormControl<string | null>}> = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  public get total(): number{
    return this.productsService.productsCar.reduce((acc, item) => acc += item.price, 0);
  }

  public get products(): Array<ProductInterface> {
    return this.productsService.productsCar;
  }

  public deleteProduct(index: number): void {
    this.productsService.productsCar.splice(index, 1);
  }

  public pay(): void{
    if(this.formGroup.valid){
      window.alert('thanks.... :) ' + this.formGroup.getRawValue()?.name);
      this.productsService.productsCar = [];
      this.router.navigate(['/']);
    }else{
      this.title = 'Enter all the data to continue';
    }
  }
}
