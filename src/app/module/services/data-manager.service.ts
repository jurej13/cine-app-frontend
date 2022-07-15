import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable, of } from 'rxjs';
import { catchError, map,filter} from 'rxjs/operators';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { TicketEntry } from 'src/app/interface/ticket.interface';
import { environment } from 'src/environments/environment';
import { FunctionPopulated, FunctionResponse } from '../../interface/functionResponse.interface';
import Swal from 'sweetalert2'
import * as moment from 'moment';
// import * as moment from 'moment';
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
  getFunctionsFilterName(id: string) : Observable<FunctionResponse[]>{
    const url : string = `${this.baseUrl}/funciones/${id}`
    return this.http.get<FunctionResponse[]>(url)
      .pipe(
        map(resp=>{
          if(resp.length===0){
            Swal.fire({
              position:'center',
              icon:'error',
              title:'This film doesnt have a function programed.',
              showConfirmButton:false,
              timer:1500
            }).finally(()=>{
              this.router.navigate(['/main'])
            })              
          }
          return resp.filter(resp=> moment().isBefore(moment(resp.startDate).format()))
        }),
        map(resp=>{
          if(resp.length===0){
            Swal.fire({
              position:'center',
              icon:'error',
              title:'This film doesnt have a function programed.',
              showConfirmButton:false,
              timer:1500
            }).finally(()=>{
              this.router.navigate(['/main'])
            }) 
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
