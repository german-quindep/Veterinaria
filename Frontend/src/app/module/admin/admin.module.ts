import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ROUTING
import { AdminRoutingModule } from '@module/admin/admin-routing.module';
//COMPONENTS
import { AdminComponent } from '@Cadmin/admin';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [ApiRestService],
})
export class AdminModule {}
