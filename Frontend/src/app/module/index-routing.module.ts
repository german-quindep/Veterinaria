import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./personas/personas.module').then(
        (m) => m.PersonasModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./veterinario/veterinario.module').then(
        (m) => m.VeterinarioModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./historial/historial.module').then(
        (m) => m.HistorialModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./mascotas/mascotas.module').then(
        (m) => m.MascotasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}