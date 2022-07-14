import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    correo : ['test@test.com',[Validators.required,Validators.email]],
    password : ['123456',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb : FormBuilder,private authService : AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.miFormulario.value)
  }
  tieneError(campo : string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched || false
  }

}
