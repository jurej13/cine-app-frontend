import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interruptor/spinner.interceptor';
import { IconLoginComponent } from './components/icon-login/icon-login.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
@NgModule({
  declarations: [
    SpinnerComponent,
    IconLoginComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    PanelMenuModule
  ],
  exports:[
    SpinnerComponent,
    IconLoginComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}

  ]
})
export class SharedModule { }
