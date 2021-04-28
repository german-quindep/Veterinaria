import { Component, OnInit, Input } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//ENFERMEDADES
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
//HISTORIAL
import { IHistorial } from '@models/Ihistorial.models';

@Component({
  selector: 'app-list-enfermedades',
  templateUrl: './list-enfermedades.component.html',
  styleUrls: ['./list-enfermedades.component.css'],
})
export class ListEnfermedadesComponent implements OnInit {
  @Input() allEnfermedades: any;
  public oneHistorial: IHistorial;
  constructor(
    public compoEnfermedad: EnfermedadesComponent,
    private apiRest: ApiRestService
  ) {}

  ngOnInit(): void {}
  verMasDetalles(id) {
    this.apiRest.getOneDataApi('one-historial/', id).subscribe(
      (res: IHistorial) => {
        this.oneHistorial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
