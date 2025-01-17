import { Component, OnInit } from '@angular/core';
import { LivreComponent } from '../../features/livre/livre.component';
import { livresModels } from '../../models/livresModels';
import { NouveauteService } from '../../services/nouveaute.service';


@Component({
  selector: 'app-nouveautes',
  standalone: true,
  imports: [
    LivreComponent,
  ],
  templateUrl: './nouveautes.component.html',
  styleUrl: './nouveautes.component.scss'
})
export default class NouveautesComponent implements OnInit {

  livres!: livresModels[];

  constructor(private nouveauteLivre : NouveauteService){}

  ngOnInit(): void {
    this.livres = this.nouveauteLivre.getLivresAccueil();
  }
}
