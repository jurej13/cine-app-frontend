import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interruptor/spinner.interceptor';



@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports:[
    SpinnerComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}

  ]
})
export class SharedModule { }
