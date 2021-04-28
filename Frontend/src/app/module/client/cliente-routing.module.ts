import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONENTS
import { ClienteComponent } from '@Ccliente/cliente';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'cliente/welcome', component: ClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    
  exports: [RouterModule],
})
export class ClienteRoutingModule {}