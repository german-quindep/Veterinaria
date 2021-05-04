import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { ServiciosRoutingModule } from '@module/servicios/servicios-routing.module';
//COMPONENTS
import { ServiciosComponent } from '@Shared/components/servicios/servicios.component';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class ServiciosModule {}
