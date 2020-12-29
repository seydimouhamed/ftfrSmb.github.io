import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn: boolean = false;
connectedUser: User;
  constructor(private userService: UsersService) { }
  login(email: string = '', pwd: string = ''): void{
    this.connectedUser = this.userService.getUserByEmailAndPass(email, pwd);
    this.loggedIn = this.connectedUser ? true : false;
    alert('dans login ' + this.loggedIn);
  }
  logout(): void {
    this.loggedIn = false;
    this.connectedUser = null;
  }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          alert(this.loggedIn);
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
}
