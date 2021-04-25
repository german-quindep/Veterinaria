import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { MascotasComponent } from '@Cmascotas/mascotas';
import { FormularioMascotasComponent } from '@Cmascotas/form-mascotas';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Mascotas', component: MascotasComponent },
  { path: 'Mascotas/Registrar-Mascotas', component: FormularioMascotasComponent },
  { path: 'Mascotas/Editar-Mascotas/:id', component: FormularioMascotasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MascotasRoutingModule {}
