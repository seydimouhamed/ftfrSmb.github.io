import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberJour'
})
export class NumberJourPipe implements PipeTransform {

  transform(date: Date): string {
  /*  const now = new Date();
    const nombreMS = now - new Date(date);
    const jours: number = Math.floor(value / 86400000 );
    return jours + ' jours ';*/
    return '';
  }

}
