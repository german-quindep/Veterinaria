import { Component, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IMascotas } from '@models/Imascotas.models';
import { ToastRMessage } from '@Shared/Toast/ToastR';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
})
export class MascotasComponent implements OnInit {
  public Mascotas: IMascotas;
  constructor(private apiRest: ApiRestService, private toast: ToastRMessage) {}

  ngOnInit(): void {
    this.getAllMascotas();
  }
  //TRAER TODAS LAS MASCOTAS
  getAllMascotas() {
    this.apiRest.getAllDataApi('Mascotas-All').subscribe(
      (res: IMascotas) => {
        this.Mascotas = res;
      },
      (err) => {
        this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
      }
    );
  }
  //ELIMINAR MASCOTAS
  eliminarMascotas(id) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Mascotas/', id).subscribe(
        (res) => {
          this.getAllMascotas();
          this.toast.showDanger(res.message, 'Eliminado con exito');
        },
        (err) => {
          this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
        }
      );
    }
  }
}
