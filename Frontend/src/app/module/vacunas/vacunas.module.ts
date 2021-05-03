import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//ROUTING
import { VacunasRoutingModule } from '@module/vacunas/vacunas-routing.module';
//COMPONENTS
import { VacunasComponent } from '@Cvacunas/vacunas';
import { FormVacunasComponent } from '@Cvacunas/form-vacunas';
import { ListVacunasComponent } from '@Cvacunas/list-vacunas';
import { DetalleMascotasVacunasComponent } from '@Cvacunas/detalle-vacunas-mascotas';
import { ConsultMascotasComponent } from '@Cvacunas/consult-mascotas';
//DIRECTIVES
import { DirectiveVacunaDirective } from '@Cvacunas/directive-vacunas';
//SHARED
import { BaseFormVacunas } from '@Shared/FormsReactive/BaseFormVacunas';

@NgModule({
  declarations: [
    VacunasComponent,
    FormVacunasComponent,
    ListVacunasComponent,
    DetalleMascotasVacunasComponent,
    ConsultMascotasComponent,
    DirectiveVacunaDirective,
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
    VacunasRoutingModule,
    CommonModule,
  ],
  providers: [
    BaseFormVacunas,
    FormVacunasComponent,
    ConsultMascotasComponent,
    DatePipe,
    ListVacunasComponent,
  ],
})
export class VacunasModule {}
