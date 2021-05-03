import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { AdminRoutingModule } from '@module/admin/admin-routing.module';
//COMPONENTS
import { AdminComponent } from '@Cadmin/admin';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, HttpClientModule, AdminRoutingModule],
  providers: [],
})
export class AdminModule {}
