import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
//ROUTING
import { PersonasRoutingModule } from '@module/personas/personas-routing.module';
import { UsersMenuModule } from '@module/users-menu/users-menu.module';
//COMPONENTS
import { PersonasComponent } from '@Cpersonas/personas';
import { FormularioComponent } from '@Cpersonas/form-persona';
import { ListPersonasComponent } from '@Cpersonas/list-personas';
//DIRECTIVES
import { EstadoDirective } from '@Cpersonas/directive-persona';
//SHARED
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';
import { ToastRMessage } from '@Shared/Toast/ToastR';
@NgModule({
  declarations: [
    PersonasComponent,
    FormularioComponent,
    ListPersonasComponent,
    EstadoDirective,
  ],
  imports: [
    PersonasRoutingModule,
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
    UsersMenuModule,
    CommonModule,
  ],
  providers: [
    ListPersonasComponent,
    FormularioComponent,
    BaseFormPerson,
    ToastRMessage,
  ],
})
export class PersonasModule {}
