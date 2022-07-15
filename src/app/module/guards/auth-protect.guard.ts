import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedUserService } from 'src/app/services/shared-user.service';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AuthProtectGuard implements CanActivate {
  token !: string
  constructor(private sharedUser :SharedUserService,private router : Router){
    this.sharedUser.token.subscribe(resp=> this.token = resp)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token !== null && this.token!== ''){
      Swal.fire({
        position:'center',
        icon:'error',
        title:'You are already logged.',
        showConfirmButton:false,
        timer:1500
      }).finally(()=>{
        this.router.navigate(['main'])
      })
      return false;
    }
    return true
  }
  
}
