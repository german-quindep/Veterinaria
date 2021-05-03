import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';
//SHARED
import { BaseFormLogin } from '@Shared/FormsReactive/BaseFormLogin';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  //VARIABLES
  idPersona;
  constructor(
    private aRouter: ActivatedRoute,
    private router: Router,
    private authApi: AuthServiceService,
    public formBaseUser: BaseFormLogin
  ) {
    //OBTENGO EL ID DE LA URL
    this.idPersona = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //VERIFICO SI ES UN ID
    this.verifyIdPersona();
  }
  //VERIFICO SI ES UN ID
  verifyIdPersona() {
    if (this.idPersona !== null) {
      this.formBaseUser.formUser.patchValue({ IdPersona: this.idPersona });
    } else {
      console.log('Debe estar registrado con un id la persona');
      this.router.navigate(['/Personas/']);
    }
  }
  //REGISTRO EL USUARIO
  registrarUser() {
    if (
      this.formBaseUser.formUser.value.password !==
      this.formBaseUser.formUser.value.verifyPassword
    )
      console.log('no coinciden la contraseña');
    else {
      this.authApi
        .registerUser('Registrar-User', this.formBaseUser.formUser.value)
        .subscribe(
          (res) => {
            this.router.navigate(['/Usuarios/auth/Login-Users/']);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
