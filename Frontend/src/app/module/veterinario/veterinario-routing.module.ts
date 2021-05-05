import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Listados',
        canActivate: [GuardsAdminGuard],
        component: VeterinarioComponent,
      },
      {
        path: 'Agregar-Veterinario',
        canActivate: [GuardsAdminGuard],
        component: VeterinarioComponent,
      },
      {
        path: 'Editar-Veterinario/:id',
        canActivate: [GuardsAdminGuard],
        component: VeterinarioComponent,
      },
      {
        path: '**',
        redirectTo: 'Listados',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VeterinarioRoutingModule {}
