import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { UsuariosRoutingModule } from './usuarios-routing.module';
//SERVICES
import { ApiRestService } from './../../services/api-rest.service';
//COMPONENTS
import { UsuariosComponent } from '@Cusuarios/usuarios';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [UsuariosRoutingModule, HttpClientModule, CommonModule],
  providers: [ApiRestService],
})
export class UsuariosModule {}
