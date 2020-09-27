import { MaterialAngularModule } from './../../../material-angular/material-angular.module';
import { ComponentsModule } from './../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsCommandePageComponent } from './produits-commande-page/produits-commande-page.component';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommandeValidePageComponent } from './commande-valide-page/commande-valide-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CommandeLivraisonPageComponent } from './commande-livraison-page/commande-livraison-page.component';
import { CommandeCommercesPageComponent } from './commande-commerces-page/commande-commerces-page.component';



const yourRoutes: Routes = [
  { path: '',  component: LoginPageComponent },
  { path: 'login',  component: LoginPageComponent },
  { path: 'produit_commerce/:idCommerce',  component: ProduitsCommandePageComponent },
  { path: 'commander',  component: CommandeCommercesPageComponent },
  { path: 'valider_commande', component: CommandeValidePageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: '**',  component: CommandeCommercesPageComponent }
];

export const yourRouting = RouterModule.forChild(yourRoutes);


@NgModule({
  declarations: [LoginPageComponent,
  ProduitsCommandePageComponent,
  CommandeValidePageComponent,
  RegisterPageComponent,
  CommandeLivraisonPageComponent,
  CommandeCommercesPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CoreModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
    yourRouting
  ],
  exports: [
    LoginPageComponent,
    ProduitsCommandePageComponent
  ],
  providers: [
    CookieService
  ]
})
export class PagesModule { }
