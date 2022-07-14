import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-icon-login',
  templateUrl: './icon-login.component.html',
  styleUrls: ['./icon-login.component.css']
})
export class IconLoginComponent implements OnInit {
  items !: MenuItem[]
  displaySidebar : boolean = false
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {label:'Iniciar Sesion',icon:'pi pi-refresh'},
      {label:'Registrarme',icon:'pi pi-refresh'},

    ]
  }

}
