import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSeparator'
})
export class NumberSeparatorPipe implements PipeTransform {

  transform(nbr: number, sep= ' '): string {
       let nombre: string = nbr.toString();
       const reg = /(\d+)(\d{3})/;
       while ( reg.test(nombre)) {
         nombre = nombre.replace(reg, '$1' + sep + '$2');
       }
       return nombre;
  }

}
