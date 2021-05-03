import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { UsersMenuComponent } from '@Cusers-menu/users-menu.component';
@NgModule({
  declarations: [UsersMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SidebarModule.forRoot(),
  ],

  exports: [UsersMenuComponent],
})
export class UsersMenuModule {}
