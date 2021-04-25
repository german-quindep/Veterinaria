import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
@Component({
  selector: 'app-formulario-veterinario',
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css'],
})
export class FormularioVeterinarioComponent implements OnInit {
  //VARIABLES
  public formVeterinario: FormGroup;
  editarVetarinario: boolean = false;
  idVeterinario;
  constructor(
    private apiRest: ApiRestService,
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    public compoVete:VeterinarioComponent,
  ) {
    this.formVeterinario = this.crearFormGroup();
    this.idVeterinario = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVete.registerUpdateVeterinario(this.formVeterinario.value);
    this.limpiarFormulario();
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Veterinario/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formVeterinario.reset();
  }
  setEditVeterinarioForm() {
    this.editarVetarinario = true;
    if (this.idVeterinario !== null) {
      this.apiRest
        .getOneDataApi('Un-Veterinario/', this.idVeterinario)
        .subscribe(
          (res) => {
            this.formVeterinario.setValue({
              IdVeterinario: res[0]['IdVeterinario'],
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
      this.editarVetarinario = false;
    }
  }
  //CREANDO FORMULARIO CON VALIDACIONES
  crearFormGroup() {
    return this.formBuilder.group({
      IdVeterinario: [''],
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
