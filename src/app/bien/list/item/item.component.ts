import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../Bien';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() bien: Bien;
  constructor() { }
  getNow(): Date{
    return new Date();
  }
  ngOnInit(): void {
  }

}
