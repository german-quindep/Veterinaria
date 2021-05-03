import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//API REST
import { ApiRestService } from '@services/api-rest.service';
//SHARED
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css'],
})
export class RegistrarPersonasComponent implements OnInit {
  constructor(
    private router: Router,
    public baseFormPerson: BaseFormPerson,
    private apiRest: ApiRestService
  ) {}
  ngOnInit(): void {}
  //GUARDAR PERSONAS
  registerAndEditFormulario() {
    this.apiRest
      .postApiData('Registrar-Persona', this.baseFormPerson.formPersona.value)
      .subscribe(
        (res) => {
          this.baseFormPerson.limpiarFormulario();
          this.router.navigate(['/Usuarios/Registrar/', res.result]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  //VOLVER AL MODULO
  volverAlModulo() {
    this.router.navigate(['/']);
  }
}
