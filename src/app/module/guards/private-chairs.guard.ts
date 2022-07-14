import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedUserService } from 'src/app/services/shared-user.service';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class PrivateChairsGuard implements CanActivate {
  token !: string
  constructor(private sharedUser : SharedUserService,private router: Router){
    this.sharedUser.token.subscribe(resp=> this.token = resp)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token== null){
        Swal.fire({
          position:'center',
          icon:'error',
          title:'Login for select a chair',
          showConfirmButton:false,
          timer:1500
        }).finally(()=>{
          this.router.navigate(['/auth/login'])
        })
        return false
      }
      return true;
  }
  
}
