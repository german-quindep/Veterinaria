import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { DatePipe } from '@angular/common';
//ROUTING
import { MascotasRoutingModule } from '@module/mascotas/mascotas-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { MascotasComponent } from '@Cmascotas/mascotas';
import { FormularioMascotasComponent } from '@Cmascotas/form-mascotas';
import { ListMascotasComponent } from '@Cmascotas/list-mascotas';
import { DetallesMascotasComponent } from '@Cmascotas/detalle-mascotas';
import { ListMascotasHistorialComponent } from '@Cmascotas/list-historial-mascotas';
import { ListMascotasVeterinarioComponent } from '@Cmascotas/list-veterinario-mascotas';
import { ListUsuariosComponent } from '@Cmascotas/list-usuarios-mascotas';
//DIRECTIVES
import { EstadoMascotasDirective } from '@Cmascotas/directives-mascotas';

@NgModule({
  declarations: [
    MascotasComponent,
    FormularioMascotasComponent,
    ListMascotasComponent,
    DetallesMascotasComponent,
    ListMascotasHistorialComponent,
    ListMascotasVeterinarioComponent,
    ListUsuariosComponent,
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
    CommonModule,
    MascotasRoutingModule,
  ],
  providers: [
    ApiRestService,
    ListMascotasHistorialComponent,
    ListMascotasVeterinarioComponent,
    ListUsuariosComponent,
    ListMascotasComponent,
    DatePipe,
  ],
})
export class MascotasModule {}
