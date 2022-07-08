import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { FunctionResponse } from 'src/app/interface/functionResponse.interface';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-seleccion-funcion',
  templateUrl: './seleccion-funcion.component.html',
  styleUrls: ['./seleccion-funcion.component.css']
})
export class SeleccionFuncionComponent implements OnInit {
  functionsResponse !: Observable<FunctionResponse[]>
  movie !: MoviesResponse
  constructor(private dataManager : DataManagerService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=>this.functionsResponse=this.dataManager.getMoviesFilterName(id)),
      map(resp=> {console.log(resp)
      return resp
      }),
      switchMap((resp)=>  this.dataManager.getMovieById(resp[0].movie))
      ).subscribe(resp=> this.movie = resp)
  }

}
