import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SeleccionButacaComponent } from './pages/seleccion-butaca/seleccion-butaca.component';
import { SeleccionFuncionComponent } from './pages/seleccion-funcion/seleccion-funcion.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    children:[
      {path:'',component:MainComponent},
      {path:'seleccion/:id',component:SeleccionFuncionComponent},
      {path:'funcion/:id',component:SeleccionButacaComponent},
    ],
  },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
