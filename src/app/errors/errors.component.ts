import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  errorMessage = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const MESSAGE = 'message';
    this.errorMessage = this.route.snapshot.data[MESSAGE];
  }

}
