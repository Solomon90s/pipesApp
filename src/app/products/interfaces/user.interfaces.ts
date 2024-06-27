export enum Rol {
  user = 'user', admin = 'admin', dev = 'dev'
}

export interface User {
  name: string;
  age: number;
  rol: Rol;
}
