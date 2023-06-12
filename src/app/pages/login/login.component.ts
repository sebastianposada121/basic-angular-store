import { Component } from '@angular/core';
import {UserInterface} from "../../shared/interfaces/user.interface";
import {LoginService} from "../../shared/services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public users!: Array<UserInterface>;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.users = loginService.users;
  }


  public login(user: UserInterface){
    this.loginService.userLogin = user;
    localStorage.setItem('token', user.id);
    this.router.navigate([user?.isAdmin ? '/dashboard/panel' : '/dashboard/home']);
  }

}
