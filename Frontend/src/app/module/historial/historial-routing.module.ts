import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from '@Chistorial/historial';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Historial', component: HistorialComponent },
  {
    path: 'Historial/Agregar-Historial',
    component: HistorialComponent,
  },
  {
    path: 'Historial/Editar-Historial/:id',
    component: HistorialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class HistorialRoutingModule {}
