import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { TicketEntry } from 'src/app/interface/ticket.interface';
import { environment } from 'src/environments/environment';
import { FunctionPopulated, FunctionResponse } from '../../interface/functionResponse.interface';

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
  getFunctionById(id : string) : Observable<FunctionPopulated>{
    const url : string = `${this.baseUrl}/funciones/function/${id}`
    return this.http.get<FunctionPopulated>(url).pipe(
      catchError(err => of(err))
    )
  }

  createTicket(date : TicketEntry):Observable<TicketEntry>{
    const url : string = `${this.baseUrl}/entrada/create`
    return this.http.post<TicketEntry>(url,date)
  }


}
