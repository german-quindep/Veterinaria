import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//SHARED
import { BaseFormMascotas } from '@Shared/FormsReactive/BaseFormMascotas';
import { ToastRMessage } from '@Shared/Toast/ToastR';

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css'],
})
export class FormularioMascotasComponent implements OnInit {
  editar: boolean = false;
  id: string | null;
  date;
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private apiRest: ApiRestService,
    public formMasco: BaseFormMascotas,
    private toast: ToastRMessage
  ) {
    //OBTENGO EL ID
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.limpiarFormulario();
    this.selectedEdit();
  }
  //OBTENER EL OUTPUT
  obtenerIdUser(mensaje) {
    this.formMasco.createMascotas.patchValue({ IdUser: mensaje });
  }
  obtenerIdVeterinario(mensaje) {
    this.formMasco.createMascotas.patchValue({ IdVeterinario: mensaje });
  }
  obtenerIdHistorial(mensaje) {
    this.formMasco.createMascotas.patchValue({ IdHistorial: mensaje });
  }
  //REGISTRAR Y ACTUALIZAR
  registerAndUpdateMascotas(form) {
    if (form.IdMascota) {
      this.apiRest
        .editApiData('Actualizar-Mascotas/', form.IdMascota, form)
        .subscribe(
          (res) => {
            this.volverAlModulo();
            this.toast.showWarning(res.message, 'Actualizado con exito');
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
          }
        );
    } else {
      this.apiRest.postApiData('Registrar-Mascotas', form).subscribe(
        (res) => {
          this.volverAlModulo();
          this.toast.showWarning(res.message, 'Registrado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
  //SELECCION DE USUARIO
  selectedEdit() {
    this.editar = true;
    this.id !== null
      ? this.apiRest.getOneDataApi('Mascotas-one/', this.id).subscribe(
          (res) => {
            this.date = res[0]['FechaNacimiento']; //TRANSFORMAR LA FECHA
            let tranformarFecha = this.datePipe.transform(
              this.date,
              'yyyy-MM-dd'
            ); //TRANSFORMAR LA FECHA
            res[0]['FechaNacimiento'] = tranformarFecha;
            this.formMasco.createMascotas.setValue({ ...res[0] });
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
          }
        )
      : (this.editar = false);
  }
  //LIMPIAR FORM
  limpiarFormulario() {
    this.formMasco.createMascotas.reset();
  }
  volverAlModulo() {
    this.router.navigate(['/Mascotas']);
  }
}
