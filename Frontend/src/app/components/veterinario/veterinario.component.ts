import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IVeterinario } from '@models/Iveterinario.models';
@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  //VARIABLES
  public allVeterinario:IVeterinario;
  constructor(private apiRest:ApiRestService) { }

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
        console.log(err);
      }
    );
  }
  //REGISTRAR O ACTUALIZAR
  registerUpdateVeterinario(form){
      //ACTUALIZAR
      if (form.IdVeterinario) {
        this.apiRest
          .editApiData('Actualizar-Veterinario/', form.IdVeterinario, form)
          .subscribe(
            (res) => {
              console.log(res);
              this.getAllVeterinario();
            },
            (err) => {
              console.log(err);
            }
          );
        //REGISTRAR
      } else {
        this.apiRest.postApiData('Regitrar-Veterinario', form).subscribe(
          (res) => {
            console.log(res);
            this.getAllVeterinario();
            //this.volverAlModulo();
          },
          (err) => {
            console.log(err);
          }
        );
      }
  }
  //ELIMINAR FORMULARIO
  eliminarVeterinario(id) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Veterinario/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllVeterinario();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
