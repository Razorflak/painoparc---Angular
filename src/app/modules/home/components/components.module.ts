import { NgImageSliderModule } from 'ng-image-slider';
import { MaterialAngularModule } from './../../../material-angular/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCommandeCardsComponent } from './produit-commande-cards/produit-commande-cards.component';
import { PanierCommandeComponent } from './panier-commande/panier-commande.component';
import { ProduitPanierComponent } from './produit-panier/produit-panier.component';
import { ProduitDisplayDetailsComponent } from './produit-display-details/produit-display-details.component';
import { ProduitLivraisonCardComponent } from './produit-livraison-card/produit-livraison-card.component';
import { ProduitQteDateLivraisonComponent } from './produit-qte-date-livraison/produit-qte-date-livraison.component';


@NgModule({
  declarations: [
    ProduitCommandeCardsComponent,
    PanierCommandeComponent,
    ProduitPanierComponent,
    ProduitDisplayDetailsComponent,
    ProduitLivraisonCardComponent,
    ProduitQteDateLivraisonComponent],
  imports: [
    CommonModule,
    MaterialAngularModule,
    NgImageSliderModule,
  ],
  exports: [
    ProduitCommandeCardsComponent,
    PanierCommandeComponent,
    ProduitLivraisonCardComponent
  ]
})
export class ComponentsModule { }
