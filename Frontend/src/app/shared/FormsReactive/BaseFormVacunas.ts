import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormVacunas {
  public formVacuna: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formVacuna = this.crearFormGroup();
  }
  //CREANDO FORMULARIO CON VALIDACIONES
  crearFormGroup() {
    return this.formBuilder.group({
      IdVacunas: [''],
      Fecha: ['', [Validators.required]],
      Tipo_Vacuna: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Num_Dosis: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[0-9]{1}$/),
        ],
      ],
      IdMascota: ['', [Validators.required]],
    });
  }
}
