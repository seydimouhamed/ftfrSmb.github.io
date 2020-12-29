import { Component, OnInit } from '@angular/core';
import {Bien} from '../Bien';
import {BienService} from '../../bien.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   recherche = '';
biens: Bien[];
  constructor(private bienService: BienService ) { }

  ngOnInit(): void {
    this.biens = this.bienService.getAllBiens();
  }

}
