import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {FooterModule} from "./shared/components/footer/footer.module";
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./pages/home/components/home/home.module";
import {FilterModule} from "./shared/components/filter/filter.module";
import {VacanciesModule} from "./shared/components/vacancies/vacancies.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutusModule} from "./pages/aboutus/components/aboutus/aboutus.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    FilterModule,
    VacanciesModule,
    AboutusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
