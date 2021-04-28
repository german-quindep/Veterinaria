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
  {
    path: '',
    loadChildren: () =>
      import('@module/enfermedades/enfermedades.module').then(
        (m) => m.EnfermedadesModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/vacunas/vacunas.module').then((m) => m.VacunasModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/client/client.module').then((m) => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
