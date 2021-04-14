import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialRoutingModule } from './historial-routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HistorialComponent } from './../../components/historial/historial.component';

@NgModule({
  declarations: [HistorialComponent],
  imports: [HistorialRoutingModule, HttpClientModule, CommonModule],
  providers: [ApiRestService],
})
export class HistorialModule {}
