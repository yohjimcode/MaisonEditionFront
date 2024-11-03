import { Injectable } from '@angular/core';
import { livresModels } from '../models/livresModels';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor() { }

  private livres: livresModels[] = [
    new livresModels(
      1,
      "Seigneur des Anneaux",
      "J.R.R Tolkien",
      "https://m.media-amazon.com/images/I/711wTudJGtL._AC_UF1000,1000_QL80_.jpg",
      new Date(),
      "Dispersée dans les terres de l'Ouest, la Communauté de l'Anneau affronte les périls de la guerre, tandis que Frodon, accompagné du fidèle Samsagace, poursuit une quête presque désespérée : détruire l'Anneau unique en le jetant dans les crevasses d'Oradruir, la Montagne du destin",
      12.50,
      15,
    ).hasChapitre('Tome 1'),

    new livresModels(
      2,
      "Harry Potter à l'école des sorciers",
      "JK Rowling",
      "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/22_9782070584628_1_75.jpg",
      new Date(),
      "Dans le premier chapitre, nous apprenons que les parents d'Harry Potter ont été assassinés par un sorcier noir nommé Lord Voldemort . Harry était le seul survivant, et personne ne peut expliquer comment ou pourquoi il a survécu (car Harry n'était qu'un bébé)",
      9.90,
      100
    ).hasChapitre('Chapitre 1'),
    
    new livresModels(
      3,
      "1984",
      "Georges Orwell",
      "https://www.gallimard.fr/system/files/styles/medium/private/migrations/ouvrages/couvertures/G00686.jpg.webp?itok=uW_5tkdx",
      new Date(),
      "L'histoire de « 1984 » se déroule en Océania, l'un des trois super-États qui se partagent le monde dans un perpétuel état de guerre. Le personnage principal, Winston Smith, est un employé du ministère de la Vérité, chargé de réécrire les archives historiques pour les aligner sur la propagande du Parti",
      9.90,
      0
    )
  ]

  // methode qui renvoie un tableau de livresModels sur la page d'accueil 
  getLivresAccueil():livresModels[]{
    return this.livres;
  }
}


