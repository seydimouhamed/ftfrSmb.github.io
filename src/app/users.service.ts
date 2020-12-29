import { Injectable } from '@angular/core';
export interface User{
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
private users: User[] = [
  {id: 1, nom: 'BASSE', prenom: 'seydina', email: 'seydina@gmail.com', password: 'passer', role: 'ADMIN'},
  {id: 2, nom: 'BASSE1', prenom: 'seydina1', email: 'seydina1@gmail.com', password: 'passer', role: 'CLIENT'},
  {id: 3, nom: 'BASSE2', prenom: 'seydina2', email: 'seydina2@gmail.com', password: 'passer', role: 'CLIENT'},
];
  constructor() { }
  findUserById(id: number): User
  {
    return this.users.find(
      (u: User) => {
        return u.id === id;
      });
  }
  getUserByEmailAndPass(email: string, pass: string): User{
    return this.users.find(
      (u: User) => {
        return (u.email === email) && (u.password === pass);
      }
    );
  }
}
