import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { AdminComponent } from '@Cadmin/admin';
//GUARDS
import { GuardsAdminGuard } from '@Shared/guards/guards-admin.guard';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'Admin/welcome',
    component: AdminComponent,
    canActivate: [GuardsAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class AdminRoutingModule {}
