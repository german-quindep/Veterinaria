import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//SHARED
import { BaseFormMascotas } from '@Shared/FormsReactive/BaseFormMascotas';

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
    public formMasco: BaseFormMascotas
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
            console.log(res);
            this.volverAlModulo();
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.apiRest.postApiData('Registrar-Mascotas', form).subscribe(
        (res) => {
          console.log(res);
          this.volverAlModulo();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //SELECCION DE USUARIO
  selectedEdit() {
    this.editar = true;
    if (this.id !== null) {
      this.apiRest.getOneDataApi('Mascotas-one/', this.id).subscribe(
        (res) => {
          this.date = res[0]['FechaNacimiento']; //TRANSFORMAR LA FECHA
          let tranformarFecha = this.datePipe.transform(
            this.date,
            'yyyy-MM-dd'
          ); //TRANSFORMAR LA FECHA
          this.formMasco.createMascotas.setValue({
            IdMascota: res[0]['IdMascota'],
            Nombre: res[0]['Nombre'],
            FechaNacimiento: tranformarFecha,
            Edad: res[0]['Edad'],
            Raza: res[0]['Raza'],
            Color: res[0]['Color'],
            Peso: res[0]['Peso'],
            Especie: res[0]['Especie'],
            IdUser: res[0]['IdUser'],
            IdVeterinario: res[0]['IdVeterinario'],
            IdHistorial: res[0]['IdHistorial'],
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.editar = false;
    }
  }
  //LIMPIAR FORM
  limpiarFormulario() {
    this.formMasco.createMascotas.reset();
  }
  volverAlModulo() {
    this.router.navigate(['/Mascotas']);
  }
}
