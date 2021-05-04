import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { NosotrosComponent } from '@Shared/components/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'Nosotros',
    component: NosotrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class NosotrosRoutingModule {}
