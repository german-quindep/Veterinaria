import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//API REST
import { ApiRestService } from '@services/api-rest.service';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css'],
})
export class RegistrarPersonasComponent implements OnInit {
  public formPersona: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiRest: ApiRestService
  ) {
    this.formPersona = this.crearFormGroup();
  }

  ngOnInit(): void {}
  //GUARDAR PERSONAS
  registerAndEditFormulario() {
    this.apiRest
      .postApiData('Registrar-Persona', this.formPersona.value)
      .subscribe(
        (res) => {
          this.formPersona.reset();
          this.router.navigate(['/Usuarios/Registrar/',res.result]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  //VOLVER AL MODULO
  volverAlModulo() {
    this.router.navigate(['/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formPersona.reset();
  }
  //CREANDO FORMULARIO CON VALIDACIONES
  crearFormGroup() {
    return this.formBuilder.group({
      IdPersona: [''],
      Nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Cedula: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^[0-9]{10}$/),
        ],
      ],
      Telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^[0-9]{10}$/),
        ],
      ],
      Direccion: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-z0-9]+$/g),
        ],
      ],
    });
  }
}
