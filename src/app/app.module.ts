import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {FooterModule} from "./shared/components/footer/footer.module";
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./pages/home/components/home/home.module";
import {FilterModule} from "./shared/components/filter/filter.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    FilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
