import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {faCartShopping, faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() simple!: boolean;
  @Output() search = new EventEmitter<string>;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faSearch = faSearch;
  protected readonly faHome = faHome;
  public control = new FormControl('');

  constructor(
  ) {
    this.control.valueChanges.subscribe(value => this.search.emit(value || ''));
  }

}
