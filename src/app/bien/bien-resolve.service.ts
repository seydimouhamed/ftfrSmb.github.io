import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Bien} from './Bien';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BienService} from '../bien.service';

@Injectable({
  providedIn: 'root'
})
export class BienResolveService implements Resolve<Bien> {
  constructor(private bienService: BienService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    const ID = 'id';
     alert("dans le resolver");
    return this.bienService.getBienById(+route.params[ID]);
  }

}
