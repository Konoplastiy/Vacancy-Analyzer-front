import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VacanciesComponent} from "./component/vacancies/vacancies.component";
import {SearchOverlayComponent} from "./component/search-overlay/search-overlay.component";
import {PlatformCardComponent} from "./component/platform-card/platform-card.component";

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
