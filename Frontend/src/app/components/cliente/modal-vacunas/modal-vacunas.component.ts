import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-vacunas',
  templateUrl: './modal-vacunas.component.html',
  styleUrls: ['./modal-vacunas.component.css']
})
export class ModalVacunasComponent implements OnInit {
  @Input() allVacunas: any;
  constructor() { }

  ngOnInit(): void {
  }

}
