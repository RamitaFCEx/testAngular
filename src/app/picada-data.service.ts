import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Picada } from './components/picada-list/Picada';

const URL = "https://62b8b677f4cb8d63df61b878.mockapi.io/api/R-OS/picadas";

@Injectable({
  providedIn: 'root'
})
export class PicadaDataService {

  constructor(private http : HttpClient) { }

  public getAll() : Observable<Picada[]>{
    return this.http.get<Picada[]>(URL).pipe(
      tap((picadas : Picada[]) => picadas.forEach(picada => picada.quantity = 0))
    );
  }
}


