import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
//SHARED
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';
import { ToastRMessage } from '@Shared/Toast/ToastR';
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
    public formVeteriBase: BaseFormPerson,
    private toast: ToastRMessage
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
    this.idVeterinario !== null
      ? this.apiRest
          .getOneDataApi('Un-Veterinario/', this.idVeterinario)
          .subscribe(
            (res) => {
              this.formVeteriBase.formVeterinario.setValue({ ...res[0] });
            },
            (err) => {
              this.toast.showDanger('Intentelo mas tarde', 'Ocurrio un error');
            }
          )
      : (this.editarVetarinario = false);
  }
}
