import { Component, Input } from '@angular/core';
import { livresModels } from './models/livresModels';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.scss'
})
export class LivresComponent {

  // @Input() livres! : livresModels;

  // monLivre! : livresModels; 

  // this.monLivre = new livresModels("premierLivre","CelineK","image",new Date(2020,1,1),"C'est le premier livre de la serie",2);

}
