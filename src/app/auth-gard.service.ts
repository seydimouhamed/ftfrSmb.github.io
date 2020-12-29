import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements  CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean  {
     return this.authService.isAuthenticated().then(
        (authenticated: boolean ) => {

          alert(authenticated);
          if ( authenticated){
            alert('true');
            return true;
          }
          else{
            alert('false');
            return false;
            this.router.navigate(['/']);
          }
        }
      );
  }
  canActivateChild(chilRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(chilRoute, state);
  }
  constructor(private authService: AuthService, private router: Router) { }
}
