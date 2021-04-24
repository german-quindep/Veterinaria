import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css']
})
export class DetallesMascotasComponent implements OnInit {
  @Input() Mascotas:any;
  constructor() { }

  ngOnInit(): void {
  }

}
