import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/module/index-routing.module').then(
        (m) => m.IndexRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}
