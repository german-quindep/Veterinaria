import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//SERVIES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';

@Component({
  selector: 'app-form-enfermedades',
  templateUrl: './form-enfermedades.component.html',
  styleUrls: ['./form-enfermedades.component.css'],
})
export class FormEnfermedadesComponent implements OnInit {
  //VARIABLES
  public formEnfermedades: FormGroup;
  editarEnfermedades: boolean = false;
  idEnfermedades;
  date;
  constructor(
    private apiRest: ApiRestService,
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    public compoVacuna: EnfermedadesComponent
  ) {
    this.formEnfermedades = this.crearFormGroup();
    this.idEnfermedades = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVacuna.regiterUpdateEnfermedad(this.formEnfermedades.value);
    this.limpiarFormulario();
  }
  //OBTENER ID
  obtenerIdEnfermedades($id) {
    this.formEnfermedades.patchValue({ IdHistorial: $id });
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Enfermedades/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formEnfermedades.reset();
  }
  setEditVeterinarioForm() {
    this.editarEnfermedades = true;
    if (this.idEnfermedades !== null) {
      this.apiRest
        .getOneDataApi('one-Enfermedades/', this.idEnfermedades)
        .subscribe(
          (res) => {
            this.formEnfermedades.setValue({
              IdEnfermedades: res[0]['IdEnfermedades'],
              Descripcion: res[0]['Descripcion'],
              Sintomas: res[0]['Sintomas'],
              IdHistorial: res[0]['IdHistorial'],
            });
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.editarEnfermedades = false;
    }
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
