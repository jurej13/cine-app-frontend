import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SeleccionFuncionComponent } from './pages/seleccion-funcion/seleccion-funcion.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'seleccion',component:SeleccionFuncionComponent}
    ],
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }