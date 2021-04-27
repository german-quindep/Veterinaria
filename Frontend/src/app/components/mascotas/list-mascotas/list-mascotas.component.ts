import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IMascotas } from '@models/Imascotas.models';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styleUrls: ['./list-mascotas.component.css'],
})
export class ListMascotasComponent implements OnInit {
  @Input() Mascotas: any;
  @Output() idMascota = new EventEmitter<string>();
  public oneMascotas: IMascotas;
  date;
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {}

  //TRANSFORMAR FECHA
  ctrlFecha($escope) {
    $escope.dt = new Date();
  }
  //VER MAS DETALLES ENVIARLO AL MODAL DETALLES-MASCOTAS
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
  obtenerIdMascota(id) {
    this.idMascota.emit(id);
  }
}
