import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
DatePipe;
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';

@Component({
  selector: 'app-form-vacunas',
  templateUrl: './form-vacunas.component.html',
  styleUrls: ['./form-vacunas.component.css'],
})
export class FormVacunasComponent implements OnInit {
  //VARIABLES
  public formVacuna: FormGroup;
  editarVacuna: boolean = false;
  idVacuna;
  date;
  constructor(
    private apiRest: ApiRestService,
    private formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private aRoute: ActivatedRoute,
    public compoVacuna: VacunasComponent
  ) {
    this.formVacuna = this.crearFormGroup();
    this.idVacuna = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVacuna.regiterUpdateVacunas(this.formVacuna.value);
    this.limpiarFormulario();
  }
  //OBTENER ID
  obtenerIdMascota($id) {
    this.formVacuna.patchValue({ IdMascota: $id });
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Vacunas/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formVacuna.reset();
  }
  setEditVeterinarioForm() {
    this.editarVacuna = true;
    if (this.idVacuna !== null) {
      this.apiRest.getOneDataApi('one-vacunas/', this.idVacuna).subscribe(
        (res) => {
          this.date = res[0]['Fecha']; //TRANSFORMAR LA FECHA
          let tranformarFecha = this.datePipe.transform(
            this.date,
            'yyyy-MM-dd'
          ); //TRANSFORMAR LA FECHA
          this.formVacuna.setValue({
            IdVacunas: res[0]['IdVacunas'],
            Fecha: tranformarFecha,
            Tipo_Vacuna: res[0]['Tipo_Vacuna'],
            Num_Dosis: res[0]['Num_Dosis'],
            IdMascota: res[0]['IdMascota'],
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.editarVacuna = false;
    }
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
