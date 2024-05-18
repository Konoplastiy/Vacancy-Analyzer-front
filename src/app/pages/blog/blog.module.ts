import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './components/blog/components/blog/blog.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    BlogComponent
  ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        NgxPaginationModule,
        TranslateModule
    ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule {
}
