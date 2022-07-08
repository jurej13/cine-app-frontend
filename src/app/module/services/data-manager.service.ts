import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { environment } from 'src/environments/environment';
import { FunctionResponse } from '../../interface/functionResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private baseUrl : string = environment.baseUrl
  constructor(private http : HttpClient,private router : Router) { }


  getMoviesLimit() : Observable<MoviesResponse[]> {
    const url : string = `${this.baseUrl}/peliculas`
    return this.http.get<MoviesResponse[]>(url).pipe(
      catchError(err => of(err))
    )
  }
  getMoviesFilterName(id: string) : Observable<FunctionResponse[]>{
    const url : string = `${this.baseUrl}/funciones/${id}`
    return this.http.get<FunctionResponse[]>(url)
      .pipe(
        map(resp=>{
          if(resp.length===0){
            this.router.navigate(['/main'])
            //TODO : algun tipo de swal o algo para indicar que no hay una funcion programada
            throw new Error('No hay funciones programadas de esta pelicula')
            
          }
          return resp
        })
      )
  }
  getMovieById(id : string) : Observable<MoviesResponse>{
    const url : string = `${this.baseUrl}/peliculas/${id}`
    return this.http.get<MoviesResponse>(url).pipe(
      catchError(err => of(err))
    )
  }


}
