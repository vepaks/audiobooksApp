import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AudiobookPageComponent } from './audiobook-page/audiobook-page.component';

const routes: Routes = [
  {
    // path: 'path', component: MainLayoutComponent
    // Зарежда MainLayoutComponent и в него зарежда останалите компоненти спрямо path-а
    path: '',
    component: MainLayoutComponent,
    children: [
      // Правим редирект към home page когато няма път в URL адреса
      //  pathMatch: 'full' - ще се редиректне само когато няма път в URL адреса
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'audiobook/:id', component: AudiobookPageComponent },
    ],
  },
  {
    // зарежда админ панела
    path: 'admin',
    loadChildren: () => {
      return import('./admin/admin.module').then(
        (loadModule) => loadModule.AdminModule
      );
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
