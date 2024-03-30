import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VacanciesRoutingModule} from './vacancies-routing.module';
import {VacanciesComponent} from "./component/vacancies/vacancies.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [VacanciesComponent],
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
  ],
  exports: [VacanciesComponent],
})
export class VacanciesModule { }
