import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//SERVIES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
//SHARED
import { BaseFormEnfermedades } from '@Shared/FormsReactive/BaseFormEnfermedades';
BaseFormEnfermedades
@Component({
  selector: 'app-form-enfermedades',
  templateUrl: './form-enfermedades.component.html',
  styleUrls: ['./form-enfermedades.component.css'],
})
export class FormEnfermedadesComponent implements OnInit {
  editarEnfermedades: boolean = false;
  idEnfermedades;
  date;
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private apiRest: ApiRestService,
    public compoVacuna: EnfermedadesComponent,
    public formEnferme:BaseFormEnfermedades
  ) {
    this.idEnfermedades = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.setEditVeterinarioForm();
  }
  //REGISTRAR VETERINARIO
  enviarForm() {
    this.compoVacuna.regiterUpdateEnfermedad(this.formEnferme.formEnfermedades.value);
    this.limpiarFormulario();
  }
  //OBTENER ID HISOTORIAL
  obtenerIdEnfermedades($id) {
    this.formEnferme.formEnfermedades.patchValue({ IdHistorial: $id });
  }
  //VOLVER AL MODULO PRINCIPAL
  volverAlModulo() {
    this.router.navigate(['/Enfermedades/ListadoEnfermedades/']);
  }
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formEnferme.formEnfermedades.reset();
  }
  setEditVeterinarioForm() {
    this.editarEnfermedades = true;
    if (this.idEnfermedades !== null) {
      this.apiRest
        .getOneDataApi('one-Enfermedades/', this.idEnfermedades)
        .subscribe(
          (res) => {
            this.formEnferme.formEnfermedades.setValue({
              IdEnfermedades: res[0]['IdEnfermedades'],
              Descripcion: res[0]['Descripcion'],
              Sintomas: res[0]['Sintomas'],
              IdHistorial: res[0]['IdHistorial'],
            });
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.editarEnfermedades = false;
    }
  }
}
