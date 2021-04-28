import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '@services/api-rest.service';
import { IEnfermedades } from '@models/Ienfermedades.models';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.css'],
})
export class EnfermedadesComponent implements OnInit {
  public allEnfermedades: IEnfermedades;
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {
    this.getAllEnfermedades();
  }
  getAllEnfermedades() {
    this.apiRest.getAllDataApi('all-enfermedades').subscribe(
      (res: IEnfermedades) => {
        this.allEnfermedades = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  regiterUpdateEnfermedad(form) {
    if (form.IdEnfermedades) {
      this.apiRest
        .editApiData('Actualizar-Enfermedades/', form.IdEnfermedades, form)
        .subscribe(
          (res) => {
            console.log(res);
            this.getAllEnfermedades();
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.apiRest.postApiData('Registrar-Enfermedades', form).subscribe(
        (res) => {
          console.log(res);
          this.getAllEnfermedades();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //ELIMINAR
  eliminarEnfermedad(id) {
    if (confirm(`Esta seguro de eliminar la vacuna con id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Enfermedades/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllEnfermedades();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
