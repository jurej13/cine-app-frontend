import { Component, Input, OnInit } from '@angular/core';
import { FunctionPopulated } from 'src/app/interface/functionResponse.interface';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {
  @Input() function !: FunctionPopulated
  @Input() key !: number
  disabledChair : boolean = false
  modalDisplay : boolean = false
  keySelected !: number
  constructor() { }

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
    this.modalDisplay = true
  }
  

}
