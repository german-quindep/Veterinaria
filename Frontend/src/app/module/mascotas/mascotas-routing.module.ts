import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { MascotasComponent } from '@Cmascotas/mascotas';
import { FormularioMascotasComponent } from '@Cmascotas/form-mascotas';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ListadoMascotas', component: MascotasComponent },
      { path: 'Registrar-Mascotas', component: FormularioMascotasComponent },
      { path: 'Editar-Mascotas/:id', component: FormularioMascotasComponent },
      { path: '**', redirectTo: 'ListadoMascotas' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MascotasRoutingModule {}
