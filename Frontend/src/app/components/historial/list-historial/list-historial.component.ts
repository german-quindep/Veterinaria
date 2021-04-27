import { Component, Input, OnInit } from '@angular/core';
import { HistorialComponent } from '@Chistorial/historial';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.css'],
})
export class ListHistorialComponent implements OnInit {
  //VARIABLES
  @Input() allHistorial: any;
  date;
  constructor(public compoHistorial: HistorialComponent) {}

  ngOnInit(): void {}
  formatFecha($escope) {
    $escope.dt = new Date();
  }
}
