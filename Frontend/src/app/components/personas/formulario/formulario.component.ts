import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PersonasComponent } from '../personas.component';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //ENTRADA DE PERSONAS
  @Input() Personas: any;
  //VARIABLES
  editarPersona: boolean = false;
  public formPersona: FormGroup;
  constructor(
    public personaComponent: PersonasComponent,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formPersona = this.crearFormGroup();
  }
  //GUARDAR PERSONAS
  registerAndEditFormulario() {
    this.personaComponent.registerAndEdit(this.formPersona.value);
    this.formPersona.reset();
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formPersona.reset();
  }
  //BUTTON REGISTRAR
  registrarModal() {
    this.editarPersona = false;
    this.limpiarFormulario();
  }
  //ENVIAR PERSONA AL INPUT
  selectedPersona(selectedPerson) {
    this.formPersona.patchValue(selectedPerson);
    this.editarPersona = true;
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
