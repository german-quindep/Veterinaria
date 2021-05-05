import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ListadoVacunas',
        canActivate: [GuardsAdminGuard],
        component: VacunasComponent,
      },
      {
        path: 'Agregar-Vacuna',
        canActivate: [GuardsAdminGuard],
        component: VacunasComponent,
      },
      {
        path: 'Editar-Vacuna/:id',
        canActivate: [GuardsAdminGuard],
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
