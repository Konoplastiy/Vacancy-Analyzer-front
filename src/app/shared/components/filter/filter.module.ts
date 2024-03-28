import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterRoutingModule} from './filter-routing.module';
import {FilterComponent} from "./components/filter/filter.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule,
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
