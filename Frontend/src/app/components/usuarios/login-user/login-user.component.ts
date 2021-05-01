import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';
//MODELS
//SHAREDS
import { BaseFormLogin } from '@Shared/BaseFormLogin';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  constructor(
    private apiRestAuth: AuthServiceService,
    private route: Router,
    public formBase: BaseFormLogin
  ) {}

  ngOnInit(): void {}
  //AUTH LOGIN
  successLogin() {
    this.apiRestAuth
      .loginUser('iniciar-sesion', this.formBase.formLogin.value)
      .subscribe(
        (res) => {
          this.verifyRol(res.result);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  //LOGOUT
  logoutLogin() {}
  //VERIFY ROL
  verifyRol(rol) {
    this.apiRestAuth
      .getOneDataRol('one-users/', rol[0].IdUser)
      .subscribe((res) => {
        const verificarRol = res[0].Nombre;
        switch (verificarRol) {
          case 'Administrador':
            this.route.navigate(['Admin/welcome']);
            break;
          case 'Empleado':
            this.route.navigate(['Empleado/welcome']);
            break;
          case 'Cliente':
            this.route.navigate(['cliente/welcome']);
            break;
          default:
            console.log('no existe ese rol');
            this.apiRestAuth.logoutUser();
        }
      });
  }
}
