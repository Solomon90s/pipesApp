import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  //? No recibir más de 3 argumentos en método o función

  transform( value: string, toUpper: boolean = false): string {

    return ( toUpper )
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}
