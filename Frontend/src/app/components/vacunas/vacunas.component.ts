import { Component, OnInit } from '@angular/core';
//API REST
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IVacunas } from '@models/Ivacunas.models';
import { ToastRMessage } from '@Shared/Toast/ToastR';
@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css'],
})
export class VacunasComponent implements OnInit {
  public allVacunas: IVacunas;
  constructor(private apiRest: ApiRestService, private toast: ToastRMessage) {}

  ngOnInit(): void {
    this.getAllVacunas();
  }
  getAllVacunas() {
    this.apiRest.getAllDataApi('all-vacunas').subscribe(
      (res: IVacunas) => {
        this.allVacunas = res;
      },
      (err) => {
        this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
      }
    );
  }
  //REGISTRAR EDITAR
  regiterUpdateVacunas(form) {
    if (form.IdVacunas) {
      this.apiRest
        .editApiData('Actualizar-Vacuna/', form.IdVacunas, form)
        .subscribe(
          (res) => {
            console.log(res);
            this.getAllVacunas();
            this.toast.showWarning(res.message, 'Se actualizo con exito');
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
          }
        );
    } else {
      this.apiRest.postApiData('Registrar-Vacuna', form).subscribe(
        (res) => {
          console.log(res);
          this.getAllVacunas();
          this.toast.showSuccess(res.message, 'Se registro con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    }
  }
  //ELIMINAR
  eliminarVacuna(id) {
    if (confirm(`Esta seguro de eliminar la vacuna con id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Vacuna/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllVacunas();
          this.toast.showDanger(res.message, 'Se elimino con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    }
  }
}
