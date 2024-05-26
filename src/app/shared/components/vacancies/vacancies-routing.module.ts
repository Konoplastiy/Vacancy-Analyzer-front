import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VacanciesComponent} from "./components/vacancies/vacancies.component";
import {SearchOverlayComponent} from "./components/search-overlay/search-overlay.component";
import {PlatformCardComponent} from "./components/platform-card/platform-card.component";

const routes: Routes = [
  {
    path: "",
    component: VacanciesComponent
  },
  {
    path: "",
    component: SearchOverlayComponent
  },
  {
    path: "",
    component: PlatformCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRoutingModule {}
