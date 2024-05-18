import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutusRoutingModule} from './aboutus-routing.module';
import {AboutusComponent} from "./components/aboutus/components/aboutus/aboutus.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [AboutusComponent],
    imports: [
        CommonModule,
        AboutusRoutingModule,
        TranslateModule,
    ],
  exports: [AboutusComponent],
})
export class AboutusModule {
}
