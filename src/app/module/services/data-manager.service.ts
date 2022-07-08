import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private baseUrl : string = environment.baseUrl
  constructor(private http : HttpClient) { }


  getMoviesLimit() : Observable<MoviesResponse[]> {
    const url : string = `${this.baseUrl}/peliculas`
    return this.http.get<MoviesResponse[]>(url).pipe(
      catchError(err => of(err))
    )
  }


}
