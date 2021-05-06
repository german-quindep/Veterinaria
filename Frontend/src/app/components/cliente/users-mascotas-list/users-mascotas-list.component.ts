import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
import { AuthServiceService } from '@services/auth-service.service';
//MODELS
import { IVeterinario } from '@models/Iveterinario.models';

@Component({
  selector: 'app-users-mascotas-list',
  templateUrl: './users-mascotas-list.component.html',
  styleUrls: ['./users-mascotas-list.component.css'],
})
export class UsersMascotasListComponent implements OnInit {
  public userMascotas: any;
  public oneVeterinario: IVeterinario;
  public allHistorial: any; //TRAER TODO EL HISTORIAL, ENFERMEDADES Y VACUNAS
  public allVacunas: any; //TRAER TODAS LAS VACUNAS
  username;
  constructor(
    private apiRest: ApiRestService,
    private authServi: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.getAllMascotas();
  }

  getAllMascotas() {
    const user = this.authServi.getCurrentUser();
    this.username = user.result[0].username;
    this.apiRest.getOneDataApi('All-mascotas-users/', this.username).subscribe(
      (res) => {
        this.userMascotas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  idVeterinario(id) {
    this.apiRest.getOneDataApi('Un-Veterinario/', id).subscribe(
      (res: IVeterinario) => {
        this.oneVeterinario = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //one-vacunas-mascotas/
  idHistorial(id) {
    this.apiRest.getOneDataApi('all-histo-enferme/', id).subscribe(
      (res: any) => {
        this.allHistorial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //TRAER VACUNAS
  idVacunas(id) {
    this.apiRest.getOneDataApi('one-vacunas-mascotas/', id).subscribe(
      (res: any) => {
        this.allVacunas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
