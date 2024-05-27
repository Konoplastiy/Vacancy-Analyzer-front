import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisComponent} from "./components/analysis/analysis.component";
import {NgChartsModule} from 'ng2-charts';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgChartsModule,
    TranslateModule,
  ],
  exports: [AnalysisComponent]
})
export class AnalysisModule { }
