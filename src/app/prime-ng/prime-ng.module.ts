import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
