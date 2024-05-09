import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import {PrivacyComponent} from "./components/privacy/components/privacy/privacy.component";


@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ],
  exports: [PrivacyComponent]
})
export class PrivacyModule { }
