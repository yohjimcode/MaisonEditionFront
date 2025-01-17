export class livresModels {

    chapitre? : string

    constructor(
        public id : number,
        public titre: string,
        public auteur: string,
        public imageLivre: string,
        public dateParution: Date,
        public resume: string,
        public prix : number,
        public recommandation: number
    ) { }

    setChapitre(chapitre: string){
        this.chapitre = chapitre;
      } 

    hasChapitre(chapitre:string):livresModels{
        this.setChapitre(chapitre);
        return this;
    }

}
