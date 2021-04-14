import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeterinarioComponent } from './../../components/veterinario/veterinario.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Veterinario', component: VeterinarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VeterinarioRoutingModule {}