import { Component } from '@angular/core';
import {ProductsService} from "../../shared/services/products/products.service";
import {ProductInterface} from "../../shared/interfaces/products.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products!: Array<ProductInterface>;
  public searchText!: string;

  constructor(
    private productsService: ProductsService
  ) {
    this.getProducts();
  }


  private getProducts(): void{
    this.productsService.products().subscribe({
      next: (response) => {
        this.products = response;
      }
    })
  }
}
