import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IHistorial } from '@models/Ihistorial.models';

@Component({
  selector: 'app-list-mascotas-historial',
  templateUrl: './list-mascotas-historial.component.html',
  styleUrls: ['./list-mascotas-historial.component.css'],
})
export class ListMascotasHistorialComponent implements OnInit {
  //VARIABLES
  public allHistorial: IHistorial;
  @Output() idHistorialModal = new EventEmitter<string>();
  constructor(private apiServi: ApiRestService) {}

  ngOnInit(): void {
    this.getAllHistorial();
  }
  //TRANSFORMAR FECHA
  ctrlFechaHistorial($escope) {
    $escope.dt = new Date();
  }
  obtenerIdHistorial(id) {
    this.idHistorialModal.emit(id);
  }
  getAllHistorial() {
    this.apiServi.getAllDataApi('all-historial').subscribe(
      (res: IHistorial) => {
        this.allHistorial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
