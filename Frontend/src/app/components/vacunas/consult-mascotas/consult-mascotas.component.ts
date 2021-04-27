import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMascotas } from '@models/Imascotas.models';
import { ApiRestService } from '@services/api-rest.service';

@Component({
  selector: 'app-consult-mascotas',
  templateUrl: './consult-mascotas.component.html',
  styleUrls: ['./consult-mascotas.component.css'],
})
export class ConsultMascotasComponent implements OnInit {
  //VARIABLES
  public allMascotas: IMascotas;
  @Output() idMascotaModal = new EventEmitter<string>();
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {
    this.getAllMascotas();
  }
  //TRAER TODAS LAS MASCOTAS
  getAllMascotas() {
    this.apiRest.getAllDataApi('Mascotas-All').subscribe(
      (res: IMascotas) => {
        this.allMascotas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //EVENTENNITER
  obtenerIdMascota(id) {
    this.idMascotaModal.emit(id);
  }
}
