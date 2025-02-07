import { Injectable } from "@angular/core";
import { LivresModel } from "../models/LivresModel";



@Injectable({
  providedIn: 'root'
})
export class NouveauteService {

  constructor( ) { }

  private livres: LivresModel[] = [
      {
        id: 1,
        isbn: "123456789",
        titre: "Seigneur des Anneaux",
        auteur: "J.R.R Tolkien",
        recommandation: 3,
        typeLivre: "NUMERIQUE",
        synopsis: "Dispersée dans les terres de l'Ouest...",
        illustration: "https://m.media-amazon.com/images/I/711wTudJGtL._AC_UF1000,1000_QL80_.jpg",
        collection: 1,
        categorie: "Fantastique",
        dateParutionNumerique: new Date(),
        prixNumerique: 12.50,
        nbrPagesNumerique: 650
      },
      {
        id: 2,
        isbn: "458741256",
        titre: "Harry Potter à l'école des sorciers",
        auteur: "JK Rowling",
        recommandation: 45,
        typeLivre: "PHYSIQUE",
        synopsis: "Dans le premier chapitre, nous apprenons que les parents d'Harry Potter ont été assassinés par un sorcier noir nommé Lord Voldemort . Harry était le seul survivant, et personne ne peut expliquer comment ou pourquoi il a survécu (car Harry n'était qu'un bébé)",
        illustration: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/22_9782070584628_1_75.jpg",
        collection: 2,
        categorie: "Fantastique",
        dateParutionPhysique: new Date(),
        prixPhysique: 24,
        nbrPagesPhysique: 450
      },
    {
      id: 3,
      isbn: "458771147",
      titre: "1984",
      auteur: "Georges Orwell",
      recommandation: 90,
      typeLivre: "PHYSIQUE",
      synopsis: "L'histoire de « 1984 » se déroule en Océania, l'un des trois super-États qui se partagent le monde dans un perpétuel état de guerre. Le personnage principal, Winston Smith, est un employé du ministère de la Vérité, chargé de réécrire les archives historiques pour les aligner sur la propagande du Parti",
      illustration: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/22_9782070584628_1_75.jpg",
      collection: 3,
      categorie: "Science-Fiction",
      dateParutionPhysique: new Date(),
      prixPhysique: 7.99,
      nbrPagesPhysique: 135
    }
  ]

  // methode qui renvoie un tableau de livresModels sur la page d'accueil 
  getLivresAccueil():LivresModel[]{
    return this.livres;
  }
}


