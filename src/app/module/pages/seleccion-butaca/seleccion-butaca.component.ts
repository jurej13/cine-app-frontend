import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, Observable } from 'rxjs';
import { FunctionPopulated } from 'src/app/interface/functionResponse.interface';
import { SharedUserService } from 'src/app/services/shared-user.service';
import { DataManagerService } from '../../services/data-manager.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-seleccion-butaca',
  templateUrl: './seleccion-butaca.component.html',
  styleUrls: ['./seleccion-butaca.component.css']
})
export class SeleccionButacaComponent implements OnInit,OnDestroy {
  function !:FunctionPopulated
  suscription$ !: Subscription
  chairsArr : number[] = [1,2,3,4,5,6,7,8,9,10]
  keySelected !: number
  modalDisplay !: Observable<boolean>
  constructor(private dataManager : DataManagerService,private route : ActivatedRoute,
    private modalService : ModalService) { }

  ngOnInit(): void {
    this.suscription$ = this.route.params.pipe(
      switchMap(({id})=>this.dataManager.getFunctionById(id))
    ).subscribe(resp=> this.function = resp)
  }
  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
  selectorKey(key : number){
    this.keySelected = key
    this.modalDisplay = this.modalService.showModal
  }

  

}
