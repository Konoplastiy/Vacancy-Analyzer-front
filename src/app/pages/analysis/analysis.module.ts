import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisComponent} from "./components/analysis/analysis.component";
import {NgChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgChartsModule,
  ],
  exports: [AnalysisComponent]
})
export class AnalysisModule { }
