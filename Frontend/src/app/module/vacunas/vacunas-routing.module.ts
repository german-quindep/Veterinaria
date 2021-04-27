import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Vacunas', component: VacunasComponent },
  {
    path: 'Vacunas/Agregar-Vacuna',
    component: VacunasComponent,
  },
  {
    path: 'Vacunas/Editar-Vacuna/:id',
    component: VacunasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VacunasRoutingModule {}
