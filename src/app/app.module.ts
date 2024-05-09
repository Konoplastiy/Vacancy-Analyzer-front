import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {FooterModule} from "./shared/components/footer/footer.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./pages/home/home.module";
import {FilterModule} from "./shared/components/filter/filter.module";
import {VacanciesModule} from "./shared/components/vacancies/vacancies.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutusModule} from "./pages/aboutus/aboutus.module";
import {PrivacyModule} from "./pages/privacy/privacy.module";
import {TermsModule} from "./pages/terms/terms.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BlogModule} from "./pages/blog/blog.module";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    BlogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
