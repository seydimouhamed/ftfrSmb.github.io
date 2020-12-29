import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondeToJour'
})
export class SecondeToJourPipe implements PipeTransform {

  transform(value: number): string {
    const jours: number = Math.floor(value / 86400000 );
    return jours + ' jours ';
  }

}
