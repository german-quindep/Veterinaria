import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ROUTING
import { VeterinarioRoutingModule } from '@module/veterinario/veterinario-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//COMPONENTS
import { VeterinarioComponent } from '@Cveterinario/veterinario';
import { FormularioVeterinarioComponent } from '@CVeterinario/form-veterinario';
import { ListVeterinarioComponent } from '@CVeterinario/list-veterinario';
//DIRECTIVES
import { DirectiveVeterinarioDirective } from '@CVeterinario/directive-veterinario';
@NgModule({
  declarations: [
    VeterinarioComponent,
    FormularioVeterinarioComponent,
    ListVeterinarioComponent,
    DirectiveVeterinarioDirective,
  ],
  imports: [
    ReactiveFormsModule,
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
    VeterinarioRoutingModule,
  ],

  providers: [
    ApiRestService,
    FormularioVeterinarioComponent,
    ListVeterinarioComponent,
  ],
})
export class VeterinarioModule {}
