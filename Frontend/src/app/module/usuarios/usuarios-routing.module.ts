import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { FormUserComponent } from '@Cusuarios/form-users';
import { LoginUserComponent } from '@Cusuarios/login-users';
import { RegistrarPersonasComponent } from '@Cusuarios/registrar-personas';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Registrar-Personas',
        component: RegistrarPersonasComponent,
      },
      { path: 'Registrar/:id', component: FormUserComponent },
      { path: 'auth/Login-Users', component: LoginUserComponent },
      { path: '**', redirectTo: 'Registrar-Personas' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
