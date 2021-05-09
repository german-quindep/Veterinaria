import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IHistorial } from '@models/Ihistorial.models';
import { ToastRMessage } from '@Shared/Toast/ToastR';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  //VARIABLES
  public allHistorial: IHistorial;
  constructor(private apiRest: ApiRestService, private toast: ToastRMessage) {}

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
        this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
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
            this.getAllHistorial();
            this.toast.showWarning(res.message, 'Actualizado con exito');
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
          }
        );
      //REGISTRAR
    } else {
      this.apiRest.postApiData('Registrar-Historial', form).subscribe(
        (res) => {
          this.getAllHistorial();
          this.toast.showSuccess(res.message, 'Registrado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
  //ELIMINAR
  eliminarHistorial(id) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Historial/', id).subscribe(
        (res) => {
          this.getAllHistorial();
          this.toast.showDanger(res.message, 'Eliminado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
}
