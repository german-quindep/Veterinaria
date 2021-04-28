import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-historial-enfermedades',
  templateUrl: './consult-historial-enfermedades.component.html',
  styleUrls: ['./consult-historial-enfermedades.component.css'],
})
export class ConsultHistorialEnfermedadesComponent implements OnInit {
  @Input() HistorialDetalles: any;
  date;
  constructor() {}

  ngOnInit(): void {}
  formatFecha($escope) {
    $escope.dt = new Date();
  }
}
