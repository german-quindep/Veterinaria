import { Component, OnInit } from '@angular/core';
import { IVeterinario } from './../../../models/Iveterinario.models';
import { ApiRestService } from './../../../services/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-veterinario',
  templateUrl: './list-veterinario.component.html',
  styleUrls: ['./list-veterinario.component.css'],
})
export class ListVeterinarioComponent implements OnInit {
  public allVeterinario: IVeterinario;
  constructor(
    private apiRest: ApiRestService,
    public router: Router
  ) {}

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
  eliminarVeterinario(id){
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
