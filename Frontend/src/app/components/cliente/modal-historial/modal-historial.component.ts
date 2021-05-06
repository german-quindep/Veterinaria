import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-historial',
  templateUrl: './modal-historial.component.html',
  styleUrls: ['./modal-historial.component.css'],
})
export class ModalHistorialComponent implements OnInit {
  @Input() allHistorial: any;
  constructor() {}

  ngOnInit(): void {}
}
