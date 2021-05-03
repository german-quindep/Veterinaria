import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
//GUARDS
import { GuardsclienteGuard } from '@Shared/guards/guardscliente.guard';
import { ClienteComponent } from '@Ccliente/cliente';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'cliente/welcome',
    component: ClienteComponent,
    canActivate: [GuardsclienteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ClienteRoutingModule {}
