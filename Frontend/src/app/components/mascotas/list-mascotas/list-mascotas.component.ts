import { Component, OnInit } from '@angular/core';
import { MascotasComponent } from './../mascotas.component';
import { IMascotas } from '../../../models/Imascotas.models';
import { ApiRestService } from './../../../services/api-rest.service';
@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styleUrls: ['./list-mascotas.component.css'],
})
export class ListMascotasComponent implements OnInit {
  public Mascotas: IMascotas;
  public oneMascotas: IMascotas;
  date;
  constructor(
    public mascotaCompo: MascotasComponent,
    private apiRest: ApiRestService
  ) {}

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
        console.log(err);
      }
    );
  }
  //TRANSFORMAR FECHA
  ctrlFecha($escope) {
    $escope.dt = new Date();
  }
  //ELIMINAR MASCOTAS
  eliminarMascotas(id: number) {
    if (confirm(`Estas seguro de eliminar al id: ${id}`)) {
      this.apiRest.deleteApiData('Eliminar-Mascotas/', id).subscribe(
        (res) => {
          console.log(res);
          this.getAllMascotas;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //VER MAS DETALLES
  verMasDetalles(id: string) {
    this.apiRest.getOneDataApi('Detalles-Mascotas/', id).subscribe(
      (res: IMascotas) => {
        this.oneMascotas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
