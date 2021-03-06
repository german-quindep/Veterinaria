import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ROUTING
import { VeterinarioRoutingModule } from '@module/veterinario/veterinario-routing.module';
import { UsersMenuModule } from '@module/users-menu/users-menu.module';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
import { FormularioVeterinarioComponent } from '@CVeterinario/form-veterinario';
import { ListVeterinarioComponent } from '@CVeterinario/list-veterinario';
//DIRECTIVES
import { DirectiveVeterinarioDirective } from '@CVeterinario/directive-veterinario';
//SHARED
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';
import { ToastRMessage } from '@Shared/Toast/ToastR';

@NgModule({
  declarations: [
    VeterinarioComponent,
    FormularioVeterinarioComponent,
    ListVeterinarioComponent,
    DirectiveVeterinarioDirective,
  ],
  imports: [
    VeterinarioRoutingModule,
    RouterModule,
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
    HttpClientModule,
    CommonModule,
  ],

  providers: [
    FormularioVeterinarioComponent,
    ListVeterinarioComponent,
    BaseFormPerson,
    ToastRMessage,
  ],
})
export class VeterinarioModule {}
