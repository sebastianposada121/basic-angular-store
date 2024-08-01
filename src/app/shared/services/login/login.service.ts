import { Injectable } from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user!: UserInterface;
  public users: Array<UserInterface> = [
    {
      id: 'asd32das',
      image: 'https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png',
      name: 'Goku',
      rolName: 'user'
    },
    {
      id: 'asd32dasdas34df',
      image: 'https://pbs.twimg.com/media/EYpCdCUXkAU8o0y.jpg',
      name: 'Kame Sen\'nin',
      rolName: 'admin',
      isAdmin: true
    }
  ];

  constructor() {
    const user = this.users.find(item => item.id === localStorage.getItem('token'));
    if(user){
      this.userLogin = user;
    }
  }

  public get userLogin(): UserInterface{
    return this.user;
  }

  public set userLogin(user: UserInterface){
    this.user = user;
  }

}
