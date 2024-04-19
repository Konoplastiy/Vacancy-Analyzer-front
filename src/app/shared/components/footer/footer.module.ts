import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterRoutingModule} from './footer-routing.module';
import {FooterComponent} from './components/footer/footer.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    TranslateModule
  ]
})
export class FooterModule {
}
