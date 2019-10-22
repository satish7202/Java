import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private myRoute: Router) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {

    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.myRoute.navigate(['login']);
  }

  setUserInfo(info) {
    localStorage.setItem('userInfo', info);
  }

  getUserInfo() {
    return localStorage.getItem('userInfo');
  }
}
