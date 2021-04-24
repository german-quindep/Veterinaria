import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { ApiRestService } from './../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { VeterinarioComponent } from '../../components/veterinario/veterinario.component';
import { FormularioVeterinarioComponent } from './../../components/veterinario/formulario-veterinario/formulario-veterinario.component';
import { ListVeterinarioComponent } from './../../components/veterinario/list-veterinario/list-veterinario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { DirectiveVeterinarioDirective } from './../../components/veterinario/directive/directive-veterinario.directive';
@NgModule({
  declarations: [
    VeterinarioComponent,
    FormularioVeterinarioComponent,
    ListVeterinarioComponent,
    DirectiveVeterinarioDirective,
  ],
  imports: [
  VeterinarioRoutingModule,
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
  ],

  providers: [ApiRestService,FormularioVeterinarioComponent,ListVeterinarioComponent],
})
export class VeterinarioModule {}
