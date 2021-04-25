import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { HistorialRoutingModule } from '@module/historial/historial-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { HistorialComponent } from '@Chistorial/historial';
import { FormularioHistorialComponent } from '@Chistorial/form-historial';
import { ListHistorialComponent } from '@Chistorial/list-historial';
//DIRECTIVES

@NgModule({
  declarations: [
    HistorialComponent,
    FormularioHistorialComponent,
    ListHistorialComponent,
  ],
  imports: [HistorialRoutingModule, HttpClientModule, CommonModule],

  providers: [
    ApiRestService,
    ListHistorialComponent,
    FormularioHistorialComponent,
  ],
})
export class HistorialModule {}
