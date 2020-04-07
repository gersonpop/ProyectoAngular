import { Pipe, PipeTransform } from '@angular/core';
import { LoggedComponent } from '../componentes/logged/logged.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBusqueda= []
    for(const articulo of value){
      if(articulo.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1  ){
       resultBusqueda.push(articulo);
      }
    }
    return resultBusqueda;
  }

}
