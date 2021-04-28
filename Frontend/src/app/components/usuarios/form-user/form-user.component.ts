import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  public formUser: FormGroup;
  idPersona;
  constructor(
    private formBuilde: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private authApi: AuthServiceService
  ) {
    this.formUser = this.createFromUser();
    this.idPersona = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.verifyIdPersona();
  }
  verifyIdPersona() {
    if (this.idPersona !== null) {
      this.formUser.patchValue({ IdPersona: this.idPersona });
    } else {
      console.log('Debe estar registrado con un id la persona');
      this.router.navigate(['/Personas/']);
    }
  }
  registrarUser() {
    if (this.formUser.value.password !== this.formUser.value.verifyPassword)
      console.log('no coinciden la contraseña');
    else {
      this.authApi
        .registerUser('Registrar-User', this.formUser.value)
        .subscribe(
          (res) => {
            this.authApi.setUser(res);
            this.authApi.setToken(res['token']);
            //this.router.navigate(['/']);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

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
}
