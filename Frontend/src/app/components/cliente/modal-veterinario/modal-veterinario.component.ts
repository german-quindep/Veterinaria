import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-veterinario',
  templateUrl: './modal-veterinario.component.html',
  styleUrls: ['./modal-veterinario.component.css']
})
export class ModalVeterinarioComponent implements OnInit {
  @Input() oneVeterinario: any;
  constructor() { }

  ngOnInit(): void {
  }

}
