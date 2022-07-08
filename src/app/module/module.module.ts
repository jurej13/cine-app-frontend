import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SeleccionFuncionComponent } from './pages/seleccion-funcion/seleccion-funcion.component';
import { CardComponent } from './components/card/card.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {HttpClientModule} from '@angular/common/http'
import { DataManagerService } from './services/data-manager.service';

@NgModule({
  declarations: [
    MainComponent,
    SeleccionFuncionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    PrimeNgModule,
    HttpClientModule
  ],
  providers:[DataManagerService]
})
export class ModuleModule { }
