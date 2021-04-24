import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from '../../components/personas/personas.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Personas', component: PersonasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class PersonasRoutingModule {}