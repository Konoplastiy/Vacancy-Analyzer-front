import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutusRoutingModule} from './aboutus-routing.module';
import {AboutusComponent} from "./aboutus/components/aboutus/aboutus.component";


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
  ],
  exports: [AboutusComponent],
})
export class AboutusModule {
}
