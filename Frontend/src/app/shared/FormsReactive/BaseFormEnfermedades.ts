import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormEnfermedades {
  //VARIABLES
  public formEnfermedades: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formEnfermedades = this.crearFormGroup();
  }
  //CREANDO FORMULARIO CON VALIDACIONES
  crearFormGroup() {
    return this.formBuilder.group({
      IdEnfermedades: [''],
      Descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Sintomas: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      IdHistorial: ['', [Validators.required]],
    });
  }
}
