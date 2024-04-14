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
import { PrivacyComponent } from './pages/privacy/components/privacy/components/privacy/privacy.component';
import {PrivacyModule} from "./pages/privacy/components/privacy/privacy.module";
import { TermsComponent } from './pages/terms/components/terms/components/terms/terms.component';
import {TermsModule} from "./pages/terms/components/terms/terms.module";


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
    PrivacyModule,
    TermsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
