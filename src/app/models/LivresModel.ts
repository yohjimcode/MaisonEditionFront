export interface LivresModel {
    id: number;
    isbn: string;
    titre: string;
    auteur: string;
    recommandation?: number;
    typeLivre: string;
    synopsis: string;
    illustration: string;
    collection: number;
    categorie: string;

    dateParutionNumerique?: Date;  
    dateParutionPhysique?: Date;

    prixNumerique?: number;
    prixPhysique?: number;

    nbrPagesNumerique?: number;
    nbrPagesPhysique?: number;
}

