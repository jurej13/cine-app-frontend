import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthProtectGuard } from './module/guards/auth-protect.guard';

const routes: Routes = [
  {
    path:'main',
    loadChildren:()=>import('./module/module.module').then(m=>m.ModuleModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate:[AuthProtectGuard]
  },
  {path:'**',redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
