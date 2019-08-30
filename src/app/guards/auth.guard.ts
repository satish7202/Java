
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
import { AuthService } from '../auth-service/authService';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard   {
  constructor(private myRoute: Router , private authService: AuthService){
  }
  canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggednIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}