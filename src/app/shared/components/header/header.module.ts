import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderRoutingModule} from './header-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeaderComponent],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
