import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';
import { BaseFormVacunas } from '@Shared/FormsReactive/BaseFormVacunas';

@Component({
  selector: 'app-form-vacunas',
  templateUrl: './form-vacunas.component.html',
  styleUrls: ['./form-vacunas.component.css'],
})
export class FormVacunasComponent implements OnInit {
  //VARIABLES
  editarVacuna: boolean = false;
  idVacuna;
  date;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private aRoute: ActivatedRoute,
    private apiRest: ApiRestService,
    public compoVacuna: VacunasComponent,
    public formVacu: BaseFormVacunas
  ) {
    this.idVacuna = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVacuna.regiterUpdateVacunas(this.formVacu.formVacuna.value);
    this.limpiarFormulario();
  }
  //OBTENER ID
  obtenerIdMascota($id) {
    this.formVacu.formVacuna.patchValue({ IdMascota: $id });
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Vacunas/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formVacu.formVacuna.reset();
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
          this.formVacu.formVacuna.setValue({
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
}
