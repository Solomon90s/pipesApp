import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //? i18nSelect
  public name: string = 'Jose';
  public gender: 'male' | 'female' = 'male';

  //? Creamos un map, para establecer la palabra correcta según el genero
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //? i18nPlural
  public clients: string[] = ['María', 'Pedro', 'Jose', 'Carlos', 'Natalia'];
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando.',
  }


  deleteClient(): void {
    this.clients.shift();
  }


  //? keyvalue pipe
  public person = {
    name: 'Jose',
    age: '31',
    address: 'Valencia, España'
  }


  //? Async pipe
  //! Con el interval indicamos cada cuanto tiempo emitimos valores
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
    );

  public promiseValue = new Promise( ( resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');

    }, 3500);
  })

}
