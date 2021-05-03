import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormMascotas {
  createMascotas: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.createMascotas = this.createFormBuilder();
  }
  createFormBuilder() {
    return (this.createMascotas = this._fb.group({
      IdMascota: [''],
      Nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      FechaNacimiento: ['', [Validators.required]],
      Edad: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      Raza: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Color: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Peso: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      Especie: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      IdUser: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      IdVeterinario: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      IdHistorial: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    }));
  }
}
