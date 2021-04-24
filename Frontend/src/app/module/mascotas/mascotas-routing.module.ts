import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotasComponent } from './../../components/mascotas/mascotas.component';
import { FormularioMascotasComponent } from './../../components/mascotas/formulario-mascotas/formulario-mascotas.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Mascotas', component: MascotasComponent },
  { path: 'Mascotas/Registrar', component: FormularioMascotasComponent },
  { path: 'Mascotas/Editar/:id', component: FormularioMascotasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MascotasRoutingModule {}
