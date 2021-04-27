import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ROUTING
import { EnfermedadesRoutingModule } from '@module/enfermedades/enfermedades-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
import { FormEnfermedadesComponent } from '@Cenfermedades/form-enfermedades';
import { ListEnfermedadesComponent } from '@Cenfermedades/list-enfermedades';
import { DirectiveEnfermedadesDirective } from '@Cenfermedades/directive-enfermedades';
@NgModule({
  declarations: [
    EnfermedadesComponent,
    FormEnfermedadesComponent,
    ListEnfermedadesComponent,
    DirectiveEnfermedadesDirective,
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
    EnfermedadesRoutingModule,
    CommonModule,
  ],
  providers: [
    ApiRestService,
    FormEnfermedadesComponent,
    ListEnfermedadesComponent,
  ],
})
export class EnfermedadesModule {}