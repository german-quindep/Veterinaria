import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
import { AuthServiceService } from '@services/auth-service.service';
//MODELS
import { IUsuarios } from '@models/Iusuarios.models';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(
    private formBuilde: FormBuilder,
    private apiRestAuth: AuthServiceService,
    private route: Router
  ) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit(): void {}
  //AUTH LOGIN
  successLogin() {
    this.apiRestAuth
      .loginUser('iniciar-sesion', this.formLogin.value)
      .subscribe(
        (res) => {
          this.apiRestAuth.setUser(res.result);
          this.apiRestAuth.setToken(res.token);
          this.route.navigate['/'];
        },
        (err) => {
          console.log(err);
        }
      );
  }
  logoutLogin(){
    
  }
  //CREATE FORM
  createFormLogin() {
    return this.formBuilde.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z0-9]+$/g),
        ],
      ],
    });
  }
}
