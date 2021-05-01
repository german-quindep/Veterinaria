import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Listados', component: VeterinarioComponent },
      {
        path: 'Agregar-Veterinario',
        component: VeterinarioComponent,
      },
      {
        path: 'Editar-Veterinario/:id',
        component: VeterinarioComponent,
      },
      {
        path: '**',
        redirectTo:'Listados'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class VeterinarioRoutingModule {}
