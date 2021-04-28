import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { FormUserComponent } from '@Cusuarios/form-users';
import { LoginUserComponent } from '@Cusuarios/login-users';
import { RegistrarPersonasComponent } from '@Cusuarios/registrar-personas';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'Usuarios/Registrar-Personas',component:RegistrarPersonasComponent},
  { path: 'Usuarios/Registrar/:id', component: FormUserComponent },
  { path: 'Usuarios/Login-Users', component: LoginUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
