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
      import('./pages/aboutus/components/aboutus.module').then((m) => m.AboutusModule)
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./pages/privacy/components/privacy/privacy.module').then((m) => m.PrivacyModule)
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms/components/terms/terms.module').then((m) => m.TermsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
