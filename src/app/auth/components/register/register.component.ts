import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { AuthService } from '../../services/auth.service';
import { ValidatorAuthService } from '../../services/validator-auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    name:['Javier Jure',[Validators.required,Validators.minLength(3)]],
    correo:['test@test.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)]],
    password2:['123456',[Validators.required,Validators.minLength(6)]],
  },
  {validators:[this.validationAuth.contraseñasIguales('password','password2')]}
  )
  suscription$ !: Subscription
  constructor(
    private fb : FormBuilder,
    private validationAuth : ValidatorAuthService,
    private authService : AuthService,
    ) { }
  

  ngOnInit(): void {
  }
  tieneError(campo : string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched || false
  }
  registrarse(){
    const usuario : User = {
      name:this.miFormulario.get('name')?.value,
      correo:this.miFormulario.get('correo')?.value,
      password:this.miFormulario.get('password')?.value
    }
    this.authService.register(usuario)
        
  }
  

}
