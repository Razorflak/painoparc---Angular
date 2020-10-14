import { ComponentsModule } from './../home/components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialAngularModule } from './../../material-angular/material-angular.module';
import { CoreModule } from './../../core/core.module';
import { HistoriqueCommandePageComponent } from './historique-commande-page/historique-commande-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerProfilSpaceComponent } from './container-profil-space/container-profil-space.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { FavoriPanierPageComponent } from './favori-panier-page/favori-panier-page.component';
import { TableauBordUserComponent } from './tableau-bord-user/tableau-bord-user.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerProfilSpaceComponent,
    children: [
      {
        path: 'tableau_bord',
        component: TableauBordUserComponent,
      },
      {
        path: '',
        redirectTo: 'tableau_bord'
      },
      {
        path: 'profil',
        component: ProfilUtilisateurComponent,
      },
      {
        path: 'mes_commandes',
        component: HistoriqueCommandePageComponent,
      },
      {
        path: 'mes_favoris',
        component: FavoriPanierPageComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    HistoriqueCommandePageComponent,
    ContainerProfilSpaceComponent,
    ProfilUtilisateurComponent,
    FavoriPanierPageComponent,
    TableauBordUserComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialAngularModule,
    routing,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ProfilSpaceModule { }
