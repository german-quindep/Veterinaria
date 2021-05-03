import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//ROUTING
import { EnfermedadesRoutingModule } from '@module/enfermedades/enfermedades-routing.module';
//COMPONENTS
import { EnfermedadesComponent } from '@Cenfermedades/enfermedades';
import { FormEnfermedadesComponent } from '@Cenfermedades/form-enfermedades';
import { ListEnfermedadesComponent } from '@Cenfermedades/list-enfermedades';
import { DetallesHistorialEnfermedadesComponent } from '@Cenfermedades/detalles-enfermedades';
import { ConsultHistorialEnfermedadesComponent } from '@Cenfermedades/consult-historial-enfermedades';
//DIRECTIVES
import { DirectiveEnfermedadesDirective } from '@Cenfermedades/directive-enfermedades';
import { BaseFormEnfermedades } from '@Shared/FormsReactive/BaseFormEnfermedades';
@NgModule({
  declarations: [
    EnfermedadesComponent,
    FormEnfermedadesComponent,
    ListEnfermedadesComponent,
    DetallesHistorialEnfermedadesComponent,
    ConsultHistorialEnfermedadesComponent,
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
    BaseFormEnfermedades,
    FormEnfermedadesComponent,
    ListEnfermedadesComponent,
    DatePipe,
  ],
})
export class EnfermedadesModule {}
