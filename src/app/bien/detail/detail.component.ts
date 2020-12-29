import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {BienService} from '../../bien.service';
import {Bien} from '../Bien';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
bien: any;
  constructor(private router: ActivatedRoute, private serviceBien: BienService) { }

  ngOnInit(): void {
     this.router.data.subscribe(
        (data: Data ) => {
          this.bien = data['bien'];
        }
      );
    /*const ID = 'id';
    const idItem = this.router.snapshot.params[ID];
   // const idItem = this.router.snapshot.paramMap.get('id');
    this.getBienById(+idItem);

    this.router.params
      .subscribe((params: Params) => {
        this.getBienById(+params[ID]);
      });*/
  }
  getBienById(id: number): void
  {
    this.bien = this.serviceBien.getBienById(id) as Bien;
  }
  ngOnDestroy(): void{
   // alert('kerzkl');
  }
}
