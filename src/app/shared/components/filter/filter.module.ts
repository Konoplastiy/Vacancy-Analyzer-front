import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import {FilterComponent} from "./components/filter/filter.component";


@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
