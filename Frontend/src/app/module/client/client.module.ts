import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ROUTING
import { ClienteRoutingModule } from '@module/client/cliente-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { ClienteComponent } from '@Ccliente/cliente';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule,ClienteRoutingModule],
  providers: [ApiRestService],
})
export class ClientModule {}
