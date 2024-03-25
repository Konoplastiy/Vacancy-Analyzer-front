import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        FooterRoutingModule
    ]
})
export class FooterModule { }
