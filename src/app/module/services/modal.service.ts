import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor() { }
  get showModal(){
    return this.showModal$.asObservable()
  }
  set showModalData(data : boolean){
    this.showModal$.next(data)
  }
}
