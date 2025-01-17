import { Component, OnDestroy, OnInit } from '@angular/core';
import { Livre } from '../../services/models/livre';
import { LivreService } from '../../services/livre/livre.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit, OnDestroy{

  livres: Livre[] = [];

  private readonly onDestroy = new Subject<void>();

  constructor( private livreService: LivreService){}

  ngOnInit(): void {
    this.livreService.getAllLivres().pipe(takeUntil(this.onDestroy))
    .subscribe(livres => {
      if(livres){
        this.livres = livres;
      }
    })
    }

    ngOnDestroy(): void {
      this.onDestroy.next();
      this.onDestroy.complete();
    }
  }
