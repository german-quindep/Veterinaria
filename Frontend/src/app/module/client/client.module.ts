import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ROUTING
import { ClienteRoutingModule } from '@module/client/cliente-routing.module';

//COMPONENTS
import { ClienteComponent } from '@Ccliente/cliente';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule,ClienteRoutingModule],
  providers: [],
})
export class ClientModule {}
