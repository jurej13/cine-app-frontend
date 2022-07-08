import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'main',
    loadChildren:()=>import('./module/module.module').then(m=>m.ModuleModule)
  },
  {path:'**',redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
