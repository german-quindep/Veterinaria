import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IVeterinario } from '@models/Iveterinario.models';
//SHARED
import { ToastRMessage } from '@Shared/Toast/ToastR';
@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css'],
})
export class VeterinarioComponent implements OnInit {
  //VARIABLES
  public allVeterinario: IVeterinario;
  constructor(private apiRest: ApiRestService, private toast: ToastRMessage) {}

  ngOnInit(): void {
    this.getAllVeterinario();
  }
  //TODOS LOS VETERINARIOS
  getAllVeterinario() {
    this.apiRest.getAllDataApi('Todos-Veterinario').subscribe(
      (res: IVeterinario) => {
        this.allVeterinario = res;
      },
      (err) => {
        this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
      }
    );
  }
  //REGISTRAR O ACTUALIZAR
  registerUpdateVeterinario(form) {
    //ACTUALIZAR
    if (form.IdVeterinario) {
      this.apiRest
        .editApiData('Actualizar-Veterinario/', form.IdVeterinario, form)
        .subscribe(
          (res) => {
            this.getAllVeterinario();
            this.toast.showWarning(res.message, 'Se actualizo con exito');
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
          }
        );
      //REGISTRAR
    } else {
      this.apiRest.postApiData('Regitrar-Veterinario', form).subscribe(
        (res) => {
          this.getAllVeterinario();
          this.toast.showSuccess(res.message, 'Se registro con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    }
  }
  //ELIMINAR FORMULARIO
  eliminarVeterinario(id) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Veterinario/', id).subscribe(
        (res) => {
          this.getAllVeterinario();
          this.toast.showDanger(res.message, 'Se elimino con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    }
  }
}
