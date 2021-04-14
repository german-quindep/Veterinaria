import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './../../components/historial/historial.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Historial', component: HistorialComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class HistorialRoutingModule {}
