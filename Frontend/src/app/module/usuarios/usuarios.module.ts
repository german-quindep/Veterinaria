import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from '../../components/usuarios/usuarios.component';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [UsuariosRoutingModule, HttpClientModule, CommonModule],
  providers: [ApiRestService],
})
export class UsuariosModule {}
