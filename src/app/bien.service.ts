import { Injectable } from '@angular/core';
import {Bien} from './bien/Bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor() { }

  // type anonymyme, a la volée
  biens: Bien[] = [
    {id: 1,
      title: 'voiture',
      description: 'desc..1',
      price: 4000000,
      image: 'https://source.unsplash.com/1080x720/?auto"',
      category: 'immobilier',
      state: 1,
      sale: true,
      createAt: new Date(2020, 11, 3, 12, 45)
    },
    {id: 2,
      title: 'clavier',
      description: 'desc..2',
      price: 6000,
      image: 'https://source.unsplash.com/1080x720/?keyboard',
      category: 'bureautique', state: 1,
      sale: true,
      createAt: new Date(2020, 11, 3, 12, 45)
    },
    {id: 3,
      title: 'Ordinateur',
      description: 'desc..3',
      price: 200000,
      image: 'https://source.unsplash.com/1080x720/?laptop',
      category: 'immobilier',
      state: 1,
      sale: true,
      createAt: new Date(2020, 11, 3, 12, 45)
    },
    {id: 4,
      title: 'voiture',
      description: 'desc..4',
      price: 4000000,
      image: 'https://source.unsplash.com/1080x720/?women',
      category: 'immobilier',
      state: 1,
      sale: true,
      createAt: new Date(2017, 11, 3, 12, 45),
    },
    {id: 5,
      title: 'title2',
      description: 'desc..',
      price: 4000000,
      image: 'https://source.unsplash.com/1080x720/?moto',
      category: 'immobilier', state: 1,
      sale: true,
      createAt: new Date(2016, 11, 3, 12, 45),
    },
    {id: 6,
      title: 'title6',
      description: 'desc..6',
      price: 200000,
      image: 'https://source.unsplash.com/1080x720/?plane',
      category: 'immobilier',
      state: 1,
      sale: true,
      createAt: new Date(2012, 12, 3, 12, 45),
    },
  ];



  getAllBiens(){
    return this.biens;
  }

  getBienById(id: number): Bien{
    const bienFound = this.biens.find(
      // on definit l'item qu'on cherche(bien) et la critere de recherche
      (bien: Bien) => {
        return bien.id === id;
      }
    );
    return bienFound;
  }

  addBien(newBien: Bien): void {
    this.biens.push(newBien);
  }

  updateBien(bienUpdated: Bien): any{
    let oldBien: Bien = this.biens.find(
      (b: Bien) => {
        return b.id === bienUpdated.id;
      }
    );
    //  spread operator
    if (oldBien){
      // pour chaque proprieté de old bien on l8 new valeur
      oldBien = {...bienUpdated};
    }
  }

  getLastId():number{
    return this.biens[this.biens.length - 1 ] ? this.biens[this.biens.length -1].id : 0;
  }

  //  a faire
  //
  deleteBien(id:number){
    const bienIndexToRemove = this.biens.findIndex(
      (bienEl) => {
        if(bienEl.id == id){
          return true;
        }
      }
    );
    this.biens.splice(bienIndexToRemove, 1);
  }
}
