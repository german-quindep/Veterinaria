import { Component, OnInit } from '@angular/core';
//API REST
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IVacunas } from '@models/Ivacunas.models';
@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css'],
})
export class VacunasComponent implements OnInit {
  public allVacunas: IVacunas;
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {
    this.getAllVacunas();
  }
  getAllVacunas() {
    this.apiRest.getAllDataApi('all-vacunas').subscribe(
      (res: IVacunas) => {
        this.allVacunas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //REGISTRAR EDITAR
  regiterUpdateVacunas(form) {
    if (form.IdVacunas) {
      this.apiRest.editApiData('Actualizar-Vacuna/', form.IdVacunas, form).subscribe(
        (res) => {
          console.log(res);
          this.getAllVacunas();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.apiRest.postApiData('Registrar-Vacuna', form).subscribe(
        (res) => {
          console.log(res);
          this.getAllVacunas();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //ELIMINAR
  eliminarVacuna(id) {
    if (confirm(`Esta seguro de eliminar la vacuna con id: ${id}`)) {
      this.apiRest.deleteApiData('', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllVacunas();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
