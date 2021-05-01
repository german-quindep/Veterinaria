import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ROUTING
import { UsuariosRoutingModule } from './usuarios-routing.module';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
import { AuthServiceService } from '@services/auth-service.service';
//COMPONENTS
import { UsuariosComponent } from '@Cusuarios/usuarios';
import { FormUserComponent } from '@Cusuarios/form-users';
import { LoginUserComponent } from '@Cusuarios/login-users';
import { RegistrarPersonasComponent } from '@Cusuarios/registrar-personas';
//SHARED
import { BaseFormLogin } from '@Shared/BaseFormLogin';
import { BaseFormPerson } from '@Shared/BaseFormPerson';
@NgModule({
  declarations: [
    UsuariosComponent,
    RegistrarPersonasComponent,
    FormUserComponent,
    LoginUserComponent,
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
    UsuariosRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    ApiRestService,
    AuthServiceService,
    BaseFormLogin,
    BaseFormPerson,
  ],
})
export class UsuariosModule {}
