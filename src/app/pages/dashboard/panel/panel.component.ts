import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  public formProduct = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  constructor(
    private productsService: ProductsService
  ) { }


  public addProduct(): void{
    const value = this.formProduct.getRawValue();
    if(this.formProduct.valid){
      this.productsService.products.push({
        category: value.category || '',
        description: value.description || '',
        id: this.productsService.products.length + 1,
        price: value.price || 0,
        rating: null,
        title: value?.title || '',
        image: value?.image || ''
      });
      console.log(this.productsService.products);
    }
  }

}
