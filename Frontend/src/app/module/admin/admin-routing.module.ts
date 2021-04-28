import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { AdminComponent } from '@Cadmin/admin';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Admin/welcome', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    
  exports: [RouterModule],
})
export class AdminRoutingModule {}