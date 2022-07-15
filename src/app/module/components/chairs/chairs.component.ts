import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FunctionPopulated } from 'src/app/interface/functionResponse.interface';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {
  @Input() function !: FunctionPopulated
  @Input() key !: number
  disabledChair : boolean = false
  modalDisplay !: Observable<boolean>
  keySelected !: number
  constructor(private modalService : ModalService ) { 
    this.modalDisplay = this.modalService.showModal
  }

  ngOnInit(): void {
  }
  stylingChairs (key : number){
    if(this.function.chairs.includes(key)){
      this.disabledChair=false
      return 'p-button-success'
    }else{
      this.disabledChair = true
      return 'p-button-danger'
    }
  }
  showModal(key : number){
    this.keySelected = key
    console.log('deberia ser false',this.modalDisplay)
    this.modalService.showModalData= true
  }
  

}
