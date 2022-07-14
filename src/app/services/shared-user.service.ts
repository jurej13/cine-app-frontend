import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../interface/authResponse';

@Injectable({
  providedIn: 'root'
})
export class SharedUserService {
  token$ : BehaviorSubject<string> = new BehaviorSubject<string>
    (localStorage.getItem('token')!)

  constructor() { }
  get token(){
    return this.token$.asObservable()
  }
  set tokenData(data:string){
    this.token$.next(data)
  }
  logout(){
    this.tokenData = ''
    localStorage.clear()
  }
}
