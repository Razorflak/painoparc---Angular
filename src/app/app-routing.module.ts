import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './modules/home/pages/pages.module';

/**
 * Par défaut on arrive dans le module Page
 * qui sera le module de base pour les utilsateur lamda
 * TODO: 2 autres module sans doute à prévoir pour l'Administration global et un autre pour les Commerces
 */
const routes: Routes = [
  {path: '',
  loadChildren: () => import('./modules/home/pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
