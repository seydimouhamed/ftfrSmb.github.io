import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
isAuth = false;
  constructor(private auservice: AuthService) {
    this.auservice.isAuthenticated().then(
      (authenticated) =>
      {
        if ( authenticated){
          this.isAuth = true;
        }else {
          this.isAuth = false;
        }
      }
    );
  }

  ngOnInit(): void {
  }
 login(): void{
    this.auservice.login('seydina@gmail.com', 'passer');
 }

 logout(): void{
    this.auservice.logout();
 }
}
