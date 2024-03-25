import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {HeaderModule} from "../../../../shared/components/header/header.module";
import {FooterModule} from "../../../../shared/components/footer/footer.module";
import {FilterModule} from "../../../../shared/components/filter/filter.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    FilterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
