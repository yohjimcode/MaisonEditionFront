import { Component, OnInit } from '@angular/core';
import { LivreComponent } from '../../features/livre/livre.component';
import { livresModels } from '../../models/livresModels';
import { LivresService } from '../../services/livres.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    LivreComponent,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {

  livres!: livresModels[];

  constructor(private livresService : LivresService){}

  ngOnInit(): void {
    this.livres = this.livresService.getLivresAccueil();
  }
}
