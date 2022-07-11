import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { FunctionPopulated } from 'src/app/interface/functionResponse.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-seleccion-butaca',
  templateUrl: './seleccion-butaca.component.html',
  styleUrls: ['./seleccion-butaca.component.css']
})
export class SeleccionButacaComponent implements OnInit,OnDestroy {
  function !:FunctionPopulated
  suscription$ !: Subscription
  chairsArr : number[] = [1,2,3,4,5,6,7,8,9,10]

  
  constructor(private dataManager : DataManagerService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.suscription$ = this.route.params.pipe(
      switchMap(({id})=>this.dataManager.getFunctionById(id))
    ).subscribe(resp=> this.function = resp)
  }
  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }

  

}
