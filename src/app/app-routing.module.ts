import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./pages/aboutus/components/aboutus/aboutus.module').then((m) => m.AboutusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
