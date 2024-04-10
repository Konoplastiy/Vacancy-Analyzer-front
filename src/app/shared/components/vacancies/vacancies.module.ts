import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VacanciesRoutingModule} from './vacancies-routing.module';
import {VacanciesComponent} from "./component/vacancies/vacancies.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {OverlayModule} from "@angular/cdk/overlay";
import { SearchOverlayComponent } from './component/search-overlay/search-overlay.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [VacanciesComponent, SearchOverlayComponent],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    OverlayModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [VacanciesComponent, SearchOverlayComponent],
})
export class VacanciesModule { }
