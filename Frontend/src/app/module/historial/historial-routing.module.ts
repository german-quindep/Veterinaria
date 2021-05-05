import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from '@Chistorial/historial';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ListadoHistorial',
        component: HistorialComponent,
      },
      {
        path: 'Agregar-Historial',
        canActivate: [GuardsAdminGuard],
        component: HistorialComponent,
      },
      {
        path: 'Editar-Historial/:id',
        canActivate: [GuardsAdminGuard],
        component: HistorialComponent,
      },
      {
        path: '**',
        redirectTo: 'ListadoHistorial',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRoutingModule {}
