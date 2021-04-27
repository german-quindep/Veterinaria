import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-mascotas-vacunas',
  templateUrl: './detalle-mascotas-vacunas.component.html',
  styleUrls: ['./detalle-mascotas-vacunas.component.css']
})
export class DetalleMascotasVacunasComponent implements OnInit {
  @Input() MascotasDetalles:any;
  constructor() { }

  ngOnInit(): void {
  }

}
