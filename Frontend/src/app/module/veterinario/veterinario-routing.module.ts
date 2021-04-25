import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Veterinario', component: VeterinarioComponent },
  { path: 'Veterinario/Agregar-Veterinario', component: VeterinarioComponent },
  {
    path: 'Veterinario/Editar-Veterinario/:id',
    component: VeterinarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VeterinarioRoutingModule {}
