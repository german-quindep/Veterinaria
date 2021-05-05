import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { PersonasComponent } from '@Cpersonas/personas';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Listados',
        canActivate: [GuardsAdminGuard],
        component: PersonasComponent,
      },
      {
        path: 'Agregar-Personas',
        canActivate: [GuardsAdminGuard],
        component: PersonasComponent,
      },
      {
        path: 'Editar-Personas/:id',
        canActivate: [GuardsAdminGuard],
        component: PersonasComponent,
      },
      { path: '**', redirectTo: 'Listados' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
