import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInterface} from "../../../../shared/interfaces/products.interface";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  @Input() product!: ProductInterface;
  @Output() deleteProduct = new EventEmitter<void>;
  protected readonly faTrash = faTrash;
}
