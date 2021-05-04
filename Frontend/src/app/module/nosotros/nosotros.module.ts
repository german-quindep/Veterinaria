import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { NosotrosRoutingModule } from '@module/nosotros/nosotros-routing.module';
//COMPONENTS
import { NosotrosComponent } from '@Shared/components/nosotros/nosotros.component';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NosotrosRoutingModule,
  ],
})
export class NosotrosModule {}
