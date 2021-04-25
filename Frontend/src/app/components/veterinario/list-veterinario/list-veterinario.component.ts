import { Component, Input, OnInit } from '@angular/core';
import { VeterinarioComponent } from '@Cveterinario/veterinario';

@Component({
  selector: 'app-list-veterinario',
  templateUrl: './list-veterinario.component.html',
  styleUrls: ['./list-veterinario.component.css'],
})
export class ListVeterinarioComponent implements OnInit {
  @Input() allVeterinario: any;
  constructor(public compoVeterinario: VeterinarioComponent) {}

  ngOnInit(): void {}
}
