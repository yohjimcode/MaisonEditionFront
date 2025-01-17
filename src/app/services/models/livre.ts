export interface Livre {
    id:number;
    isbn: string;
    titre: string;
    illustration: string;
    synopsis: string;
    auteursId: number[];
    collectionId: number | null;
    categorie: string;
    typeLivre: string;

    dateParutionNumerique?: string; 
    prixNumerique?: number;
    nbrPagesNumerique?: number;
  
    dateParutionPhysique?: string; 
    prixPhysique?: number;
    nbrPagesPhysique?: number;
}