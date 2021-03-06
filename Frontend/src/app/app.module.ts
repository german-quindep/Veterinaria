import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';
import { ApiRestService } from '@services/api-rest.service';
import { AuthRolService } from '@services/auth-rol.service';
import { InterceptorsHeaders } from '@services/interceptors-headers.service';
import { InterceptorsErrors } from '@services/interceptors-errors.service';
//MODELS
import { NavbarModule } from '@module/navbar/navbar.module';
import { FooterModule } from '@module/footer/footer.module';
import { SectionModule } from '@module/section/section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true,
    }),
    BrowserModule,
    NavbarModule,
    SectionModule,
    FooterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsErrors,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsHeaders,
      multi: true,
    },
    AuthServiceService,
    AuthRolService,
    ApiRestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
