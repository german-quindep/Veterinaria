import { Component, Input, OnInit } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { VacunasComponent } from '@Cvacunas/vacunas';
import { IVacunas } from './../../../models/Ivacunas.models';
import { IMascotas } from '@models/Imascotas.models';
@Component({
  selector: 'app-list-vacunas',
  templateUrl: './list-vacunas.component.html',
  styleUrls: ['./list-vacunas.component.css'],
})
export class ListVacunasComponent implements OnInit {
  @Input() allVacunas: any;
  public oneMascotas: IMascotas;
  constructor(
    public compoVacunas: VacunasComponent,
    public apiRest: ApiRestService
  ) {}

  ngOnInit(): void {}
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
  //TRANSFORMAR FECHA
  formatFecha($escope) {
    $escope.dt = new Date();
  }
}
