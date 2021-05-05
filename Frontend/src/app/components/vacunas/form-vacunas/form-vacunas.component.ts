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
    this.idVacuna !== null
      ? this.apiRest.getOneDataApi('one-vacunas/', this.idVacuna).subscribe(
          (res) => {
            this.date = res[0]['Fecha']; //TRANSFORMAR LA FECHA
            let tranformarFecha = this.datePipe.transform(
              this.date,
              'yyyy-MM-dd'
            ); //TRANSFORMAR LA FECHA
            res[0]['Fecha'] = tranformarFecha;
            this.formVacu.formVacuna.setValue({ ...res[0] });
          },
          (err) => {
            console.log(err);
          }
        )
      : (this.editarVacuna = false);
  }
}
