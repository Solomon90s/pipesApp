import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(users: User[], sortBy?: keyof User | '', order?: boolean): User[] {

    switch ( sortBy ) {
      case 'name':
        return order
        ? users.sort( (a,b) => ( a.name > b.name ) ? 1: -1 )
        : users.sort( (a,b) => ( a.name < b.name ) ? 1: -1 );

      case 'age':
        return order
        ? users.sort( (a,b) => ( a.age > b.age ) ? 1: -1 )
        : users.sort( (a,b) => ( a.age < b.age ) ? 1: -1 );

      case 'rol':
        return order
        ? users.sort( (a,b) => ( a.rol > b.rol ) ? 1: -1 )
        : users.sort( (a,b) => ( a.rol < b.rol ) ? 1: -1 )
      default:
        return users;
    }
  }

}
