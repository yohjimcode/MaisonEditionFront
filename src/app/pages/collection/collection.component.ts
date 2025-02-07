import { Component, OnDestroy, OnInit } from '@angular/core';
import { LivreService } from '../../services/livre/livre.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LivreComponent } from '../../features/livre/livre.component';
import { LivresModel } from '../../models/LivresModel';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    CommonModule,
    LivreComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit, OnDestroy{

  livres: LivresModel[] = [];

  private readonly onDestroy = new Subject<void>();

  constructor( private livreService: LivreService){}

  ngOnInit(): void {
    this.livreService.getAllLivres().pipe(takeUntil(this.onDestroy))
    .subscribe({
      next: (livres) => {
        this.livres = livres || [];
      },
      error: (err) => {
        console.error("Erreur lors du chargement", err);
      }
    })
    }

    ngOnDestroy(): void {
      this.onDestroy.next();
      this.onDestroy.complete();
    }
  }
