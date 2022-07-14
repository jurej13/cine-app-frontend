import { Injectable } from '@angular/core';
import {  catchError, Observable, of } from 'rxjs';
import { AuthResponse } from 'src/app/interface/authResponse';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SharedUserService } from 'src/app/services/shared-user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string = environment.baseUrl
  constructor(private http: HttpClient,private router : Router,
    private sharedUser : SharedUserService
    ) { }
  //TODO: hacer login y register
  login(miFormulario : FormGroup){
    const url = `${this.baseUrl}/auth`
    this.http.post<AuthResponse>(url,miFormulario).pipe(
      catchError(err => of(err))
    ).subscribe(resp=>{
      this.sharedUser.tokenData = resp.token
      Swal.fire({
        position:'center',
        icon:'success',
        title:'Logging',
        showConfirmButton:false,
        timer:1500
      }).finally(()=>{
        localStorage.setItem('token',resp.token)
        this.router.navigate(['/main'])
      })
    })
  }
  register(data : User){
    const url = `${this.baseUrl}/auth/create`
    this.http.post<User>(url,data).pipe(
      catchError(err=> of(err))
    ).subscribe(resp=>{
      if(resp.correo){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User created with Success',
          showConfirmButton: false,
          timer: 1500
        }).finally(()=>{
          this.router.navigate(['auth/login'])
        })
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'That email already exist.',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
}
