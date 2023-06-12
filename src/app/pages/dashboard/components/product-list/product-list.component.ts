import {Component, Input} from '@angular/core';
import {ProductInterface} from "../../../../shared/interfaces/products.interface";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products!: Array<ProductInterface>;
  @Input() searchText!: string;
}
