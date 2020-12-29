import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
@Output() search = new EventEmitter<string>();
  constructor() { }

  emitSearch(value: string): void{
    alert(value);
  }
  ngOnInit(): void {
  }

}
