import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonasRoutingModule}from'./personas-routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from '../../components/personas/personas.component';

@NgModule({
  declarations: [PersonasComponent],
  imports: [PersonasRoutingModule, HttpClientModule, CommonModule],
  providers: [ApiRestService],
})
export class PersonasModule {}
