import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//GUARDS
const routes: Routes = [
  {
    path: 'Personas',
    loadChildren: () =>
      import('@module/personas/personas.module').then((m) => m.PersonasModule),
  },
  {
    path: 'Usuarios',
    loadChildren: () =>
      import('@module/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'Veterinario',
    loadChildren: () =>
      import('@module/veterinario/veterinario.module').then(
        (m) => m.VeterinarioModule
      ),
  },
  {
    path: 'Historial',
    loadChildren: () =>
      import('@module/historial/historial.module').then(
        (m) => m.HistorialModule
      ),
  },
  {
    path: 'Mascotas',
    loadChildren: () =>
      import('@module/mascotas/mascotas.module').then((m) => m.MascotasModule),
  },
  {
    path: 'Enfermedades',
    loadChildren: () =>
      import('@module/enfermedades/enfermedades.module').then(
        (m) => m.EnfermedadesModule
      ),
  },
  {
    path: 'Vacunas',
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
