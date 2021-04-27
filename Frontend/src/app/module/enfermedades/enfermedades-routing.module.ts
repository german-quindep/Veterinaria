import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Enfermedades', component: EnfermedadesComponent },
  {
    path: 'Enfermedades/Agregar-Enfermedades',
    component: EnfermedadesComponent,
  },
  {
    path: 'Enfermedades/Editar-Enfermedades/:id',
    component: EnfermedadesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class EnfermedadesRoutingModule {}
