import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ListadoEnfermedades',
        canActivate: [GuardsAdminGuard],
        component: EnfermedadesComponent,
      },
      {
        path: 'Agregar-Enfermedades',
        canActivate: [GuardsAdminGuard],
        component: EnfermedadesComponent,
      },
      {
        path: 'Editar-Enfermedades/:id',
        canActivate: [GuardsAdminGuard],
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
