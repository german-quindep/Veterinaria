import { Component, Input, OnInit } from '@angular/core';
//COMPONENTS
import { PersonasComponent } from '@Cpersonas/personas';
@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  //ENTRADA DE PERSONAS
  @Input() Personas: any;
  constructor(public componePerson:PersonasComponent) { }

  ngOnInit(): void {
  }

}
