import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  public formLogin: FormGroup; //FORM PARA LOGIN
  public formUser: FormGroup; //FORM PARA USER
  constructor(private formBuilde: FormBuilder, private router: Router) {
    //BUSCO EN QUE RUTA SE ENCUENTRA
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.match('/Usuarios/auth/Login-Users')) {
          this.formLogin = this.createFormLogin(); //CREO ESE FORMULARIO
        } else {
          this.formUser = this.createFromUser();
        }
      }
    });
  }
  //CREO FORMULARIO DE REGISTRO DE USUARIOS
  createFromUser() {
    return this.formBuilde.group({
      IdUser: [''],
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z0-9]+$/g),
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
      verifyPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z0-9]+$/g),
        ],
      ],
      IdPersona: ['', [Validators.required]],
    });
  }
  //CREO FORMULARIO DE LOGIN
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
