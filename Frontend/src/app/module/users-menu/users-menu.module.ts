import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMenuComponent } from '@Cusers-menu/users-menu.component';

@NgModule({
  declarations: [UsersMenuComponent],
  imports: [CommonModule],
  exports:[UsersMenuComponent]
})
export class UsersMenuModule {}
