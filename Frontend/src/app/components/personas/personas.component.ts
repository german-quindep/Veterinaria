import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IPersona } from '@models/Ipersona.models';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  //VARIABLES
  public Personas: IPersona;
  url_post: string = 'Todas-Persona';
  constructor(public serviApi: ApiRestService) {}
  ngOnInit(): void {
    this.getAllPersonas();
  }
  //REGISTRO Y EDITAR
  registerAndEdit(form) {
    if (!form.IdPersona) {
      //REGISTRAR
      this.serviApi.postApiData('Registrar-Persona', form).subscribe(
        (res) => {
          console.log(res);
          this.getAllPersonas();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      //UPDATE
      this.serviApi
        .editApiData('Actualizar-Persona/', form.IdPersona, form)
        .subscribe(
          (res) => {
            console.log(res);
            this.getAllPersonas();
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
  //TRAER LAS PERSONAS
  getAllPersonas() {
    this.serviApi.getAllDataApi(this.url_post).subscribe(
      (res: IPersona) => {
        this.Personas = res;
      },
      (error: any) => {
        console.log('Hubo un error', error);
      }
    );
  }
  //ELIMINAR
  eliminar(id: number) {
    if (confirm('Esta seguro de eliminar al usuario: ' + id)) {
      this.serviApi.deleteApiData('Eliminar-Persona/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllPersonas();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
