import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/module/personas/personas.module').then(
        (m) => m.PersonasModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/module/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
