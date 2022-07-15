import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { SharedUserService } from 'src/app/services/shared-user.service';

@Component({
  selector: 'app-icon-login',
  templateUrl: './icon-login.component.html',
  styleUrls: ['./icon-login.component.css']
})
export class IconLoginComponent implements OnInit {
  items !: MenuItem[]
  items2 !: MenuItem[]
  displaySidebar : boolean = false
  token !: string
  constructor( private sharedUser:SharedUserService) { 
    this.sharedUser.token.subscribe(resp=> this.token = resp)
  }

  ngOnInit(): void {
    this.items=[
      {label:'Iniciar Sesion',icon:'pi pi-refresh',routerLink:'/auth/login'},
      {label:'Registrarme',icon:'pi pi-refresh',routerLink:'/auth/register'},
    ]
    this.items2=[
      {label:'Logout',icon:'pi pi-refresh',routerLink:'/main',command:()=>this.sharedUser.logout()}
    ]
  }

}
