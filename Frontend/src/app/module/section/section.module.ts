import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@Csection/section.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [SectionComponent],
})
export class SectionModule {}
