import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ROUTING
import { UsuariosRoutingModule } from './usuarios-routing.module';
//COMPONENTS
import { UsuariosComponent } from '@Cusuarios/usuarios';
import { FormUserComponent } from '@Cusuarios/form-users';
import { LoginUserComponent } from '@Cusuarios/login-users';
import { RegistrarPersonasComponent } from '@Cusuarios/registrar-personas';
//SHARED
import { BaseFormLogin } from '@Shared/FormsReactive/BaseFormLogin';
import { BaseFormPerson } from '@Shared/FormsReactive/BaseFormPerson';
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
    BaseFormLogin,
    BaseFormPerson,
  ],
})
export class UsuariosModule {}
