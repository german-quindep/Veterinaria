import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ListadoEnfermedades', component: EnfermedadesComponent },
      {
        path: 'Enfermedades/Agregar-Enfermedades',
        component: EnfermedadesComponent,
      },
      {
        path: 'Enfermedades/Editar-Enfermedades/:id',
        component: EnfermedadesComponent,
      },
      {
        path: '**',
        redirectTo: 'ListadoEnfermedades',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class EnfermedadesRoutingModule {}
