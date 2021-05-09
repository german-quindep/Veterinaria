import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '@services/api-rest.service';
import { IEnfermedades } from '@models/Ienfermedades.models';
//SHARED
import { ToastRMessage } from '@Shared/Toast/ToastR';
@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.css'],
})
export class EnfermedadesComponent implements OnInit {
  public allEnfermedades: IEnfermedades;
  constructor(private apiRest: ApiRestService, private toast: ToastRMessage) {}

  ngOnInit(): void {
    this.getAllEnfermedades();
  }
  getAllEnfermedades() {
    this.apiRest.getAllDataApi('all-enfermedades').subscribe(
      (res: IEnfermedades) => {
        this.allEnfermedades = res;
      },
      (err) => {
        this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
      }
    );
  }
  //REGISTER AND UPDATE
  regiterUpdateEnfermedad(form) {
    if (form.IdEnfermedades) {
      this.apiRest
        .editApiData('Actualizar-Enfermedades/', form.IdEnfermedades, form)
        .subscribe(
          (res) => {
            this.getAllEnfermedades();
            this.toast.showWarning(res.message, 'Actualizado con exito');
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
          }
        );
    } else {
      this.apiRest.postApiData('Registrar-Enfermedades', form).subscribe(
        (res) => {
          this.getAllEnfermedades();
          this.toast.showSuccess(res.message, 'Registrado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
  //ELIMINAR
  eliminarEnfermedad(id) {
    if (confirm(`Esta seguro de eliminar la vacuna con id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Enfermedades/', id).subscribe(
        (res) => {
          this.getAllEnfermedades();
          this.toast.showDanger(res.message, 'Eliminado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
}
