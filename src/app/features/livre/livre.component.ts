import { Component, Input } from '@angular/core';
import { livresModels } from '../../models/livresModels';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-livre',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.scss'
})
export class LivreComponent {

  dejaRecommand! : boolean; //! promesse -> sera init plus tard
  textBouton!: string;
  

  @Input() livre !: livresModels; // A voir 

  ngOnInit(): void {
      this.dejaRecommand = false;
      this.textBouton = "Recommander";
    }

 

  addRecommandation(){
    if(!this.dejaRecommand){
    this.livre.recommandation++;
    this.dejaRecommand = true;
    this.textBouton = "Ne plus recommander";
    }
    else{
      this.livre.recommandation--;
      this.dejaRecommand = false;
      this.textBouton = "Recommander";
    }
  }

}