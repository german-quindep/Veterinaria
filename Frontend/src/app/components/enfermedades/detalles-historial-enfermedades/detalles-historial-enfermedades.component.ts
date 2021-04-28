import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHistorial } from '@models/Ihistorial.models';
import { ApiRestService } from '@services/api-rest.service';

@Component({
  selector: 'app-detalles-historial-enfermedades',
  templateUrl: './detalles-historial-enfermedades.component.html',
  styleUrls: ['./detalles-historial-enfermedades.component.css'],
})
export class DetallesHistorialEnfermedadesComponent implements OnInit {
  //VARIABLES
  public allHistorial: IHistorial;
  @Output() idHistorialModal = new EventEmitter<string>();
  constructor(private apiRest: ApiRestService) {}

  ngOnInit(): void {
    this.getAllMascotas();
  }
  //TRANSFOMRAR FECHA
  formatFecha($escope) {
    $escope.dt = new Date();
  }
  //TRAER TODAS LAS MASCOTAS
  getAllMascotas() {
    this.apiRest.getAllDataApi('all-historial').subscribe(
      (res: IHistorial) => {
        this.allHistorial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //EVENTENNITER
  obtenerIdHistorial(id) {
    this.idHistorialModal.emit(id);
  }
}
