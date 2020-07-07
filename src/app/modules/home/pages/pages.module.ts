import { Routes, RouterModule } from '@angular/router';
import { ProduitsCommandePageComponent } from './produits-commande-page/produits-commande-page.component';
import { CoreModule } from './../../../core/core.module';
import { HeaderComponent } from './../../../core/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';


const yourRoutes: Routes = [
  { path: '**',  component: LoginPageComponent }
];

export const yourRouting = RouterModule.forChild(yourRoutes);


@NgModule({
  declarations: [LoginPageComponent,
  ProduitsCommandePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    yourRouting
  ],
  exports: [LoginPageComponent,
  ProduitsCommandePageComponent]
})
export class PagesModule { }
