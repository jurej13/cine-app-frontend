import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
