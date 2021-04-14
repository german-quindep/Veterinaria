import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { VeterinarioComponent } from '../../components/veterinario/veterinario.component';

@NgModule({
  declarations: [VeterinarioComponent],
  imports: [VeterinarioRoutingModule, HttpClientModule, CommonModule],
  providers: [ApiRestService],
})
export class VeterinarioModule {}
