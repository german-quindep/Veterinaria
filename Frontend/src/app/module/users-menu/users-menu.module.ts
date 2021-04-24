import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMenuComponent } from './../../components/users-menu/users-menu.component';

@NgModule({
  declarations: [UsersMenuComponent],
  imports: [CommonModule],
  exports:[UsersMenuComponent]
})
export class UsersMenuModule {}
