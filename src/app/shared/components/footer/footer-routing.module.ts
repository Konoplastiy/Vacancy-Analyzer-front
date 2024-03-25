import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "../header/components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

const routes: Routes = [
  {
    path: "",
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
