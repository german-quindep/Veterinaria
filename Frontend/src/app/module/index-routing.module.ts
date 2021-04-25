import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@module/personas/personas.module').then((m) => m.PersonasModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/veterinario/veterinario.module').then(
        (m) => m.VeterinarioModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/historial/historial.module').then(
        (m) => m.HistorialModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/mascotas/mascotas.module').then((m) => m.MascotasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
