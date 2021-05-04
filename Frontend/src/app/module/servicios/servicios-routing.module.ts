import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { ServiciosComponent } from '@Shared/components/servicios/servicios.component';

const routes: Routes = [
  {
    path: 'Servicios',
    component: ServiciosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
