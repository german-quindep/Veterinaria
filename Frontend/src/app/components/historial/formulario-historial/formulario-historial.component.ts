import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '../../../services/api-rest.service';
//COMPONENTS
import { HistorialComponent } from '@Chistorial/historial';
//SHARED
import { BaseFormHistorial } from '@Shared/FormsReactive/BaseFormHistorial';

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.css'],
})
export class FormularioHistorialComponent implements OnInit {
  //VARIABLES
  editarHistorial: boolean = false;
  idHistorialSet;
  date;
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private apiRest: ApiRestService,
    private compoHistorial: HistorialComponent,
    public formHisto: BaseFormHistorial
  ) {
    this.idHistorialSet = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.setEditHistorialForm();
  }

  volverAlModulo() {
    this.router.navigate(['/Historial/ListadoHistorial/']);
  }
  enviarForm() {
    this.compoHistorial.registrarEditHistorial(
      this.formHisto.createFormHistorial.value
    );
    this.limpiarFormulario();
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formHisto.createFormHistorial.reset();
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
            this.formHisto.createFormHistorial.setValue({
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
}
