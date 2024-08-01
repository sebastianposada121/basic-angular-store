import { Pipe, PipeTransform } from '@angular/core';
import {ProductInterface} from "../../interfaces/products.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<ProductInterface>, text: string): Array<ProductInterface> {
    if(!text){
      return value;
    }
    return value.filter(item => item.title?.toLowerCase()?.includes(text) || item.price.toString().includes(text));
  }

}
