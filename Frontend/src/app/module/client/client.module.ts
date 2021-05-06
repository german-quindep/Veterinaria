import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//ROUTING
import { ClienteRoutingModule } from '@module/client/cliente-routing.module';

//COMPONENTS
import { ClienteComponent } from '@Ccliente/cliente';
import { UsersMascotasListComponent } from '@Ccliente/allMascotas';
import { ModalHistorialComponent } from '@Ccliente/modalHistorial';
import { ModalVacunasComponent } from '@Ccliente/modalVacunas';
import { ModalVeterinarioComponent } from '@Ccliente/modalVeterinario';

@NgModule({
  declarations: [
    ClienteComponent,
    UsersMascotasListComponent,
    ModalHistorialComponent,
    ModalVacunasComponent,
    ModalVeterinarioComponent,
  ],
  imports: [CommonModule, HttpClientModule, ClienteRoutingModule],
  providers: [
    UsersMascotasListComponent,
    ModalHistorialComponent,
    ModalVacunasComponent,
    ModalVeterinarioComponent,
  ],
})
export class ClientModule {}
