import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SeleccionFuncionComponent } from './pages/seleccion-funcion/seleccion-funcion.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    MainComponent,
    SeleccionFuncionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
