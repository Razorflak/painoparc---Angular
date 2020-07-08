import { Routes, RouterModule } from '@angular/router';
import { ProduitsCommandePageComponent } from './produits-commande-page/produits-commande-page.component';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


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
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    yourRouting
  ],
  exports: [LoginPageComponent,
  ProduitsCommandePageComponent]
})
export class PagesModule { }
