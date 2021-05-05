import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { MascotasComponent } from '@Cmascotas/mascotas';
import { FormularioMascotasComponent } from '@Cmascotas/form-mascotas';
//GUARDS
import { CheckLoginGuardsGuard } from '@Shared/guards/check-login-guards.guard';
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ListadoMascotas',
        canActivate: [GuardsAdminGuard],
        component: MascotasComponent,
      },
      {
        path: 'Registrar-Mascotas',
        canActivate: [GuardsAdminGuard],
        component: FormularioMascotasComponent,
      },
      {
        path: 'Editar-Mascotas/:id',
        canActivate: [GuardsAdminGuard],
        component: FormularioMascotasComponent,
      },
      { path: '**', redirectTo: 'ListadoMascotas' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasRoutingModule {}
