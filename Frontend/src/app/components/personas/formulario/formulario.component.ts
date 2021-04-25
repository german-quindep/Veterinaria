import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { PersonasComponent } from '@Cpersonas/personas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //VARIABLES
  editarPersona: boolean = false;
  public formPersona: FormGroup;
  idPersona;
  constructor(
    public personaComponent: PersonasComponent,
    private formBuilder: FormBuilder,
    private aRoute: ActivatedRoute,
    private apiRest: ApiRestService,
    private router: Router
  ) {
    this.formPersona = this.crearFormGroup();
    this.idPersona = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.selectedPersona();
  }
  //GUARDAR PERSONAS
  registerAndEditFormulario() {
    this.personaComponent.registerAndEdit(this.formPersona.value);
    this.formPersona.reset();
  }
  //VOLVER AL MODULO
  volverAlModulo() {
    this.router.navigate(['/Personas']);
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
  selectedPersona() {
    this.editarPersona = true;
    if (this.idPersona !== null) {
      this.apiRest.getOneDataApi('one-Persona/', this.idPersona).subscribe(
        (res) => {
          this.limpiarFormulario();
          this.formPersona.setValue({
            IdPersona: res[0]['IdPersona'],
            Nombre: res[0]['Nombre'],
            Apellido: res[0]['Apellido'],
            Cedula: res[0]['Cedula'],
            Telefono: res[0]['Telefono'],
            Direccion: res[0]['Direccion'],
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.editarPersona = false;
    }
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
