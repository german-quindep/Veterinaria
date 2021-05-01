import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from '@Chistorial/historial';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ListadoHistorial', component: HistorialComponent },
      {
        path: 'Agregar-Historial',
        component: HistorialComponent,
      },
      {
        path: 'Editar-Historial/:id',
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
