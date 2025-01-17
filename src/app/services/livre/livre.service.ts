import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre';
import { environnement } from '../../../environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  constructor(private readonly http: HttpClient) {}

  getAllLivres(): Observable<Livre[]>{
    return this.http.get<Livre[]>(
      `${environnement.apiUrl}/livres`
    ) //prévoir partie catchError
  }
}