import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';


@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css'],
})
export class FormularioMascotasComponent implements OnInit {
  createMascotas: FormGroup;
  editar: boolean = false;
  id: string | null;
  date;
  constructor(
    private apiRest: ApiRestService,
    private router: Router,
    private _fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe,
  ) {
    this.createMascotas = this.createFormBuilder();
    //OBTENGO EL ID
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.selectedEdit();
  }
  //OBTENER EL OUTPUT
  obtenerIdUser(mensaje) {
    this.createMascotas.patchValue({ IdUser: mensaje });
  }
  obtenerIdVeterinario(mensaje) {
    this.createMascotas.patchValue({ IdVeterinario: mensaje });
  }
  obtenerIdHistorial(mensaje) {
    this.createMascotas.patchValue({ IdHistorial: mensaje });
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
          this.createMascotas.setValue({
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
    this.createMascotas.reset();
  }
  volverAlModulo() {
    this.router.navigate(['/Mascotas']);
  }
  createFormBuilder() {
    return (this.createMascotas = this._fb.group({
      IdMascota: [''],
      Nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      FechaNacimiento: ['', [Validators.required]],
      Edad: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      Raza: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Color: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      Peso: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      Especie: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/i),
        ],
      ],
      IdUser: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      IdVeterinario: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      IdHistorial: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
    }));
  }
}
