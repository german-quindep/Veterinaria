import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IPersona } from '@models/Ipersona.models';
//SHARED
import { ToastRMessage } from '@Shared/Toast/ToastR';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  //VARIABLES
  public Personas: IPersona;
  url_post: string = 'Todas-Persona';
  constructor(public serviApi: ApiRestService, private toast: ToastRMessage) {}
  ngOnInit(): void {
    this.getAllPersonas();
  }
  //TRAER LAS PERSONAS
  getAllPersonas() {
    this.serviApi.getAllDataApi(this.url_post).subscribe(
      (res: IPersona) => {
        this.Personas = res;
      },
      (error: any) => {
        this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
      }
    );
  }
  //REGISTRO Y EDITAR
  registerAndEdit(form) {
    if (!form.IdPersona) {
      //REGISTRAR
      this.serviApi.postApiData('Registrar-Persona', form).subscribe(
        (res) => {
          this.getAllPersonas();
          this.toast.showSuccess(res.message, `Registrado con exito`);
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    } else {
      //UPDATE
      this.serviApi
        .editApiData('Actualizar-Persona/', form.IdPersona, form)
        .subscribe(
          (res) => {
            this.getAllPersonas();
            this.toast.showWarning(res.message, `Actualizado con exito`);
          },
          (err) => {
            this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
          }
        );
    }
  }
  //ELIMINAR
  eliminar(id: number) {
    if (confirm('Esta seguro de eliminar al usuario: ' + id)) {
      this.serviApi.deleteApiData('Eliminar-Persona/', id).subscribe(
        (res) => {
          this.getAllPersonas();
          this.toast.showDanger(res.message, `Eliminado con exito`);
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Hubo un error');
        }
      );
    }
  }
}
