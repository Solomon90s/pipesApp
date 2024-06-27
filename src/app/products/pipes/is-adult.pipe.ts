import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdult'
})
export class IsAdultPipe implements PipeTransform {

  transform( value: number ): 'es mayor de edad' | 'no es mayor de edad' {
    return value >= 18 ? 'es mayor de edad' : 'no es mayor de edad';
  }

}
