import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from '../../components/mascotas/mascotas.component';
import { ApiRestService } from './../../services/api-rest.service';
import { FormularioMascotasComponent } from './../../components/mascotas/formulario-mascotas/formulario-mascotas.component';
import { ListMascotasComponent } from './../../components/mascotas/list-mascotas/list-mascotas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { DatePipe } from '@angular/common';
import { EstadoMascotasDirective } from './../../components/mascotas/directives/estado-mascotas.directive';
import { DetallesMascotasComponent } from './../../components/mascotas/detalles-mascotas/detalles-mascotas.component';
@NgModule({
  declarations: [
    MascotasComponent,
    FormularioMascotasComponent,
    ListMascotasComponent,
    DetallesMascotasComponent,
    EstadoMascotasDirective,
  ],
  imports: [
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: (error) => `Address isn't valid`,
        },
      },
    }),
    FormsModule,
    HttpClientModule,
    MascotasRoutingModule,
    CommonModule,
  ],
  providers: [ApiRestService, ListMascotasComponent, DatePipe],
})
export class MascotasModule {}
