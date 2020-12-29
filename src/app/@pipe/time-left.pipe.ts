import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {
  transform(createAt: Date): string {
    const date = new Date();

    const dif = date.getTime() - createAt.getTime();

    const seconeto = dif / 1000;
    const left = Math.abs(seconeto);

    let type = '';
    let div = 0;

    // const y = left / 60 / 60 / 24 / 365;
    if ( (left / ((86400 ) / 24)) >= 1){
      type = 'heures';
      div = 3600000;
    }

    if ( (left / (86400 )) >= 1){
      type = 'jours';
      div = 86400 ;
    }
    if ( (left / (86400 * 30 )) >= 1){
      type = 'mois';
      div = 86400 * 30;
    }
    if ( (left / (31536000 )) >= 1){
      type = 'an';
      div = 31536000;
    }


      const returnValue: number = Math.floor(left / div );
    return returnValue +  ` ${type} `;
  }

}
