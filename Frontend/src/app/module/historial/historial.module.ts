import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { DatePipe } from '@angular/common';
//ROUTING
import { HistorialRoutingModule } from '@module/historial/historial-routing.module';
//COMPONENTS
import { HistorialComponent } from '@Chistorial/historial';
import { FormularioHistorialComponent } from '@Chistorial/form-historial';
import { ListHistorialComponent } from '@Chistorial/list-historial';
//DIRECTIVES
import { HistorialDirectiveDirective } from '@Chistorial/directive-historial';
//SHARED
import { BaseFormHistorial } from '@Shared/FormsReactive/BaseFormHistorial';
@NgModule({
  declarations: [
    HistorialComponent,
    FormularioHistorialComponent,
    ListHistorialComponent,
    HistorialDirectiveDirective,
  ],
  imports: [
    FormsModule,
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
    ReactiveFormsModule,
    HistorialRoutingModule,
    HttpClientModule,
    CommonModule,
  ],

  providers: [
    BaseFormHistorial,
    FormularioHistorialComponent,
    ListHistorialComponent,
    DatePipe,
  ],
})
export class HistorialModule {}
