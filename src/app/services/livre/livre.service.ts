import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from '../../../environments/environment';
import { LivresModel } from '../../models/LivresModel';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  constructor(private readonly http: HttpClient) {}

  getAllLivres(): Observable<LivresModel[]>{
    return this.http.get<LivresModel[]>(
      `${environnement.apiUrl}/livre`
    ) //prévoir partie catchError
  }
}