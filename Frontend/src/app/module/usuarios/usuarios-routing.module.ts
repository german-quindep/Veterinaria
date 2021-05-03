import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { FormUserComponent } from '@Cusuarios/form-users';
import { LoginUserComponent } from '@Cusuarios/login-users';
import { RegistrarPersonasComponent } from '@Cusuarios/registrar-personas';
//SHARED GUARDS
import { CheckLoginGuardsGuard } from '@Shared/guards/check-login-guards.guard';
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Registrar-Personas',
        canActivate: [CheckLoginGuardsGuard],
        component: RegistrarPersonasComponent,
      },
      {
        path: 'Registrar/:id',
        canActivate: [CheckLoginGuardsGuard],
        component: FormUserComponent,
      },
      {
        path: 'auth/Login-Users',
        canActivate: [CheckLoginGuardsGuard],
        component: LoginUserComponent,
      },
      { path: '**', redirectTo: 'Registrar-Personas' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
