import { Component } from '@angular/core';
import { Rol, User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  public isUpperCase: boolean = false;
  public orderBy?: keyof User;
  public order: boolean = false;


  //? método para cambiar de false a true y viceversa
  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  public users: User[] = [
    {
      name: 'Jose',
      age: 31,
      rol: Rol.admin
    },
    {
      name: 'Carlos',
      age: 17,
      rol: Rol.user
    },
    {
      name: 'Andrés',
      age: 40,
      rol: Rol.dev
    },
    {
      name: 'Fernando',
      age: 18,
      rol: Rol.admin
    },
    {
      name: 'Víctor',
      age: 30,
      rol: Rol.user
    }
  ]

  changeOrder( value: keyof User) {
    this.orderBy === value
      ? this.order = !this.order
      : (this.orderBy = value, this.order = true);
  }

}
