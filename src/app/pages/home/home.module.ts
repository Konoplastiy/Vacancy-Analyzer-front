import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {FilterModule} from "../../shared/components/filter/filter.module";
import {VacanciesModule} from "../../shared/components/vacancies/vacancies.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FilterModule,
    VacanciesModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
