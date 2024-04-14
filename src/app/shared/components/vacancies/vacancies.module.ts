import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VacanciesRoutingModule} from './vacancies-routing.module';
import {VacanciesComponent} from "./component/vacancies/vacancies.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {OverlayModule} from "@angular/cdk/overlay";
import {SearchOverlayComponent} from './component/search-overlay/search-overlay.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {FilterModule} from "../filter/filter.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [VacanciesComponent, SearchOverlayComponent],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    MatButtonModule,
    OverlayModule,
    MatDividerModule,
    MatListModule,
    FilterModule,
    MatIconModule,
    NgxPaginationModule,
  ],
  exports: [VacanciesComponent, SearchOverlayComponent],
})
export class VacanciesModule { }
