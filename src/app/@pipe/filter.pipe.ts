import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string, propName: string): any {
    if (value.length === 0 || search.length === 0){
      return value;
    }

    return value.filter( (item) => {
       return item[propName].includes(search) ;
      // return item[propName] === search ;
    });
  }
  /* if(bienUpdated){
    bienUpd = {...bienUpdatedt}
  }
  */

}
