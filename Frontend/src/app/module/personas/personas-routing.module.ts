import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from '@Cpersonas/personas';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Personas', component: PersonasComponent },
  { path: 'Personas/Agregar-Personas', component: PersonasComponent },
  { path: 'Personas/Editar-Personas/:id', component: PersonasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
