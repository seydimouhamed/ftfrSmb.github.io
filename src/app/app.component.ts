import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demomeet';
  active = true;
  value = '';

  receiveSearch(searchValue: string): void {
    this.title = 'dfs';
  }
}
