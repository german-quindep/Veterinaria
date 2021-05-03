import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';
import { ApiRestService } from '@services/api-rest.service';
import { AuthRolService } from '@services/auth-rol.service';
//MODELS
import { NavbarModule } from '@module/navbar/navbar.module';
import { FooterModule } from '@module/footer/footer.module';
import { SectionModule } from '@module/section/section.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NavbarModule,
    SectionModule,
    FooterModule,
  ],
  providers: [ApiRestService, AuthServiceService, AuthRolService],
  bootstrap: [AppComponent],
})
export class AppModule {}
