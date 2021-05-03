import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
//SHARED
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';
@Component({
  selector: 'app-formulario-veterinario',
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css'],
})
export class FormularioVeterinarioComponent implements OnInit {
  //VARIABLES
  editarVetarinario: boolean = false;
  idVeterinario;
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private apiRest: ApiRestService,
    public compoVete: VeterinarioComponent,
    public formVeteriBase: BaseFormPerson
  ) {
    this.idVeterinario = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVete.registerUpdateVeterinario(
      this.formVeteriBase.formVeterinario.value
    );
    this.formVeteriBase.limpiarFormularioVete();
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Veterinario/']);
  }
  setEditVeterinarioForm() {
    this.editarVetarinario = true;
    if (this.idVeterinario !== null) {
      this.apiRest
        .getOneDataApi('Un-Veterinario/', this.idVeterinario)
        .subscribe(
          (res) => {
            this.formVeteriBase.formVeterinario.setValue({
              IdVeterinario: res[0]['IdVeterinario'],
              Nombre: res[0]['Nombre'],
              Apellido: res[0]['Apellido'],
              Cedula: res[0]['Cedula'],
              Telefono: res[0]['Telefono'],
              Direccion: res[0]['Direccion'],
            });
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.editarVetarinario = false;
    }
  }
}
