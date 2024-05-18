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
import {PlatformCardComponent} from './component/platform-card/platform-card.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [VacanciesComponent, SearchOverlayComponent, PlatformCardComponent],
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
        MatSnackBarModule,
        TranslateModule
    ],
  exports: [VacanciesComponent, SearchOverlayComponent, PlatformCardComponent],
})
export class VacanciesModule {
}
