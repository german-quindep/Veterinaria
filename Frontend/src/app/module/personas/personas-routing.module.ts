import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from '@Cpersonas/personas';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Listados', component: PersonasComponent },
      { path: 'Agregar-Personas', component: PersonasComponent },
      { path: 'Editar-Personas/:id', component: PersonasComponent },
      { path: '**', redirectTo: 'Listados' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
