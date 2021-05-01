import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '../../../services/api-rest.service';
//COMPONENTS
import { HistorialComponent } from '@Chistorial/historial';

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.css'],
})
export class FormularioHistorialComponent implements OnInit {
  public createFormHistorial: FormGroup;
  editarHistorial: boolean = false;
  idHistorialSet;
  date;
  constructor(
    private apiRest: ApiRestService,
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private compoHistorial: HistorialComponent
  ) {
    this.createFormHistorial = this.crearFormGroup();
    this.idHistorialSet = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.setEditHistorialForm();
  }

  volverAlModulo() {
    this.router.navigate(['/Historial/ListadoHistorial/']);
  }
  enviarForm() {
    this.compoHistorial.registrarEditHistorial(this.createFormHistorial.value);
    this.createFormHistorial.reset();
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.createFormHistorial.reset();
  }
  //SET ID HISTORIAL
  setEditHistorialForm() {
    this.editarHistorial = true;
    if (this.idHistorialSet !== null) {
      this.apiRest
        .getOneDataApi('one-historial/', this.idHistorialSet)
        .subscribe(
          (res) => {
            this.date = res[0]['Fecha']; //TRANSFORMAR LA FECHA
            let tranformarFecha = this.datePipe.transform(
              this.date,
              'yyyy-MM-dd'
            ); //TRANSFORMAR LA FECHA
            this.createFormHistorial.setValue({
              IdHistorial: res[0]['IdHistorial'],
              Diagnostico: res[0]['Diagnostico'],
              Motivo: res[0]['Motivo'],
              Fecha: tranformarFecha,
            });
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.editarHistorial = false;
    }
  }
  //CREANDO FORMULARIO CON VALIDACIONES
  crearFormGroup() {
    return this.formBuilder.group({
      IdHistorial: [''],
      Diagnostico: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Motivo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Fecha: ['', [Validators.required]],
    });
  }
}
