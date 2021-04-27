import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IHistorial } from '@models/Ihistorial.models';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  //VARIABLES
  public allHistorial: IHistorial;
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {
    this.getAllHistorial();
  }
  //TRAER TODOS LOS DATOS
  getAllHistorial() {
    this.apiRest.getAllDataApi('all-historial').subscribe(
      (res: IHistorial) => {
        this.allHistorial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //REGISTRAR Y EDITAR
  registrarEditHistorial(form) {
    if (form.IdHistorial) {
      this.apiRest
        .editApiData('Actualizar-Historial/', form.IdHistorial, form)
        .subscribe(
          (res) => {
            console.log(res);
            this.getAllHistorial();
          },
          (err) => {
            console.log(err);
          }
        );
      //REGISTRAR
    } else {
      this.apiRest.postApiData('Registrar-Historial', form).subscribe(
        (res) => {
          console.log(res);
          this.getAllHistorial();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //ELIMINAR
  eliminarHistorial(id) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Historial/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllHistorial();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
