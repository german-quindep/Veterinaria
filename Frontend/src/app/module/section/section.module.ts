import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './../../components/section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule],
  exports:[SectionComponent]
})
export class SectionModule {}
