import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiRestService } from './../../../services/api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListVeterinarioComponent } from './../list-veterinario/list-veterinario.component';
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
    public allList: ListVeterinarioComponent
  ) {
    this.formVeterinario = this.crearFormGroup();
    this.idVeterinario = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  registerAndEditVeterinario(form) {
    //ACTUALIZAR
    if (form.IdVeterinario) {
      this.apiRest
        .editApiData('Actualizar-Veterinario/', form.IdVeterinario, form)
        .subscribe(
          (res) => {
            console.log(res);
            this.formVeterinario.reset();
            //this.volverAlModulo();
            this.allList.getAllVeterinario();
          },
          (err) => {
            console.log(err);
          }
        );
      //REGISTRAR
    } else {
      this.apiRest.postApiData('Regitrar-Veterinario', form).subscribe(
        (res) => {
          console.log(res);
          this.formVeterinario.reset();
          this.allList.getAllVeterinario();
          //this.volverAlModulo();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Veterinario']);
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
