import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersMenuComponent } from '@Cusers-menu/users-menu.component';
@NgModule({
  declarations: [UsersMenuComponent],
  imports: [CommonModule, RouterModule],

  exports: [UsersMenuComponent],
})
export class UsersMenuModule {}
