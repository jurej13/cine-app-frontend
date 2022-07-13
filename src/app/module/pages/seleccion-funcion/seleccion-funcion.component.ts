import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { FunctionResponse } from 'src/app/interface/functionResponse.interface';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-seleccion-funcion',
  templateUrl: './seleccion-funcion.component.html',
  styleUrls: ['./seleccion-funcion.component.css']
})
export class SeleccionFuncionComponent implements OnInit,OnDestroy {
  functionsResponse !: Observable<FunctionResponse[]>
  movie !: MoviesResponse
  suscription$ !: Subscription
  constructor(private dataManager : DataManagerService,
      private route : ActivatedRoute,
      private router : Router
      ) { }
  

  ngOnInit(): void {
    this.suscription$ = this.route.params.pipe(
      switchMap(({id})=>this.functionsResponse=this.dataManager.getMoviesFilterName(id)),
      switchMap((resp)=>  this.dataManager.getMovieById(resp[0].movie))
      ).subscribe(resp=> this.movie = resp)
  }
  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
  goToSeleccionButaca(id: string){
    this.router.navigate(['funcion',id])
  }
}
