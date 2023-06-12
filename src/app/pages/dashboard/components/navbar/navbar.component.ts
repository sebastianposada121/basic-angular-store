import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {faCartShopping, faHome, faSearch, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {FormControl} from "@angular/forms";
import {LoginService} from "../../../../shared/services/login/login.service";
import {UserInterface} from "../../../../shared/interfaces/user.interface";

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
  public user!: UserInterface;

  constructor(
    private loginService: LoginService
  ) {
    this.control.valueChanges.subscribe(value => this.search.emit(value || ''));
    this.user = loginService.userLogin;
  }

  protected readonly faUserCircle = faUserCircle;
}
