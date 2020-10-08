import { CommandeLivraisonPageComponent } from './commande-livraison-page/commande-livraison-page.component';
import { CommandeValidePageComponent } from './commande-valide-page/commande-valide-page.component';
import { CommandeCommercesPageComponent } from './commande-commerces-page/commande-commerces-page.component';
import { CommandeProduitPageComponent } from './commande-produit-page/commande-produit-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './../../core/core.module';
import { ComponentsModule } from './../home/components/components.module';
import { MaterialAngularModule } from './../../material-angular/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCommandeComponent } from './container-commande/container-commande.component';



const routes: Routes = [
  {
    path: '',
    component: ContainerCommandeComponent,
    children: [
      { path: '',  component: CommandeCommercesPageComponent },
      { path: 'commerces',  component: CommandeCommercesPageComponent },
      { path: 'produit_commerce/:idCommerce',  component: CommandeProduitPageComponent }

    ]
  },
  { path: 'valider_commande', component: CommandeValidePageComponent}
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [ContainerCommandeComponent,
    CommandeProduitPageComponent,
    CommandeValidePageComponent,
    CommandeLivraisonPageComponent,
    CommandeCommercesPageComponent],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ComponentsModule,
    CoreModule,
    routing
  ]
})
export class CommandeModule { }
