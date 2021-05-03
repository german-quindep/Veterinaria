import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@Cnavbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarModule {}
