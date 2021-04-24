import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasRoutingModule } from './personas-routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from '../../components/personas/personas.component';
import { FormularioComponent } from '../../components/personas/formulario/formulario.component';
import { UsersMenuModule } from '../users-menu/users-menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { EstadoDirective } from './../../components/personas/directives/estado.directive';

@NgModule({
  declarations: [PersonasComponent, FormularioComponent, EstadoDirective],
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
    UsersMenuModule,
    PersonasRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ApiRestService, FormularioComponent],
})
export class PersonasModule {}
