import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { PersonasComponent } from '@Cpersonas/personas';
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //VARIABLES
  editarPersona: boolean = false;
  idPersona;
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private apiRest: ApiRestService,
    public personaComponent: PersonasComponent,
    public baseFormPerson: BaseFormPerson
  ) {
    //OBTENGO EL ID DE LA URL
    this.idPersona = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.selectedPersona();
  }
  //GUARDAR PERSONAS
  registerAndEditFormulario() {
    this.personaComponent.registerAndEdit(
      this.baseFormPerson.formPersona.value
    );
    this.baseFormPerson.limpiarFormulario();
  }
  //VOLVER AL MODULO
  volverAlModulo() {
    this.router.navigate(['/Personas']);
  }
  //BUTTON REGISTRAR
  registrarModal() {
    this.editarPersona = false;
    this.baseFormPerson.limpiarFormulario();
  }
  //ENVIAR PERSONA AL INPUT
  selectedPersona() {
    this.editarPersona = true;
    this.idPersona !== null
      ? this.apiRest.getOneDataApi('one-Persona/', this.idPersona).subscribe(
          (res) => {
            this.baseFormPerson.limpiarFormulario();
            this.baseFormPerson.formPersona.setValue({ ...res[0] }); //ASIGNO LO QUE VIENE DE LA CONSULTA
          },
          (err) => {
            console.log(err);
          }
        )
      : (this.editarPersona = false);
  }
}
