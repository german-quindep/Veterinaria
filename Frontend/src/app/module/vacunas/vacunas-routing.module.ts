import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ListadoVacunas', component: VacunasComponent },
      {
        path: 'Agregar-Vacuna',
        component: VacunasComponent,
      },
      {
        path: 'Editar-Vacuna/:id',
        component: VacunasComponent,
      },
      {
        path: '**',
        redirectTo: 'ListadoVacunas',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VacunasRoutingModule {}
