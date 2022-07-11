import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SeleccionFuncionComponent } from './pages/seleccion-funcion/seleccion-funcion.component';
import { CardComponent } from './components/card/card.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { DataManagerService } from './services/data-manager.service';
import { SeleccionButacaComponent } from './pages/seleccion-butaca/seleccion-butaca.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ButacasPipe } from './pipes/butacas.pipe';
import { ChairsComponent } from './components/chairs/chairs.component';
import { ModalTicketComponent } from './components/modal-ticket/modal-ticket.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerInterceptor } from '../shared/interruptor/spinner.interceptor';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    MainComponent,
    SeleccionFuncionComponent,
    CardComponent,
    SeleccionButacaComponent,
    PrincipalComponent,
    ButacasPipe,
    ChairsComponent,
    ModalTicketComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers:[DataManagerService,
    {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}
  ]
})
export class ModuleModule { }
