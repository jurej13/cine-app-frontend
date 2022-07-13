import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionPopulated } from 'src/app/interface/functionResponse.interface';
import { TicketEntry } from 'src/app/interface/ticket.interface';
import Swal from 'sweetalert2';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent implements OnInit {
  @Input() modalDisplay : boolean = false
  @Input() function !: FunctionPopulated
  @Input() keySelected !: number
  ticket !: TicketEntry
  namePersona : string = '' 
  constructor(private dataManager : DataManagerService,private router : Router) { }

  ngOnInit(): void {
    
  }
  createTicket(){
    if(this.namePersona == ''){
      this.modalDisplay = false
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Complete the name plz',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.ticket = {
        price : this.function.price,
        date : this.function.startDate,
        chair : this.keySelected,
        movieName: this.function.movie.name,
        namePersona : this.namePersona,
        function : this.function._id
      }
      this.modalDisplay=false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ticket purchased with success',
        showConfirmButton: false,
        timer: 1500
      }).finally(()=> {
        this.dataManager.createTicket(this.ticket)
        .subscribe(_=>{
          this.router.navigate(['main'])  
        })})
    }
    
  }
}
