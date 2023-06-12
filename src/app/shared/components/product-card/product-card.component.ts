import {Component, Input} from '@angular/core';
import {ProductInterface} from "../../interfaces/products.interface";
import {ProductsService} from "../../services/products/products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductInterface;

  constructor(
    private productsService: ProductsService
  ) { }

  public addProduct(product: ProductInterface): void{
    this.productsService.productsCar.push(product);
  }
}
