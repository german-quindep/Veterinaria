import { Component, OnInit } from '@angular/core';
import {IPersona}from '../../models/Ipersona.models';
import {ApiRestService}from'../../services/api-rest.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(public serviApi:ApiRestService) { }
  public Persona: IPersona;
  public UnaPersona:IPersona;
  url_post:string="Todas-Persona";
  ngOnInit(): void {
    this.getAllPersonas();
  }
  //TRAER LAS PERSONAS
  getAllPersonas() {
    this.serviApi.getAllDataApi(this.url_post).subscribe((res: IPersona) => {
      this.Persona = res;
      console.log(this.Persona)
    });
  }
  //REGISTRAR PERSONAS

}
