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
import { CommerceCommandeCardComponent } from './commerce-commande-card/commerce-commande-card.component';
import { PanierRecapMobilComponent } from './panier-recap-mobil/panier-recap-mobil.component';
import { NavbarCommandeComponent } from './navbar-commande/navbar-commande.component';


@NgModule({
  declarations: [
    ProduitCommandeCardsComponent,
    PanierCommandeComponent,
    ProduitPanierComponent,
    ProduitDisplayDetailsComponent,
    ProduitLivraisonCardComponent,
    ProduitQteDateLivraisonComponent,
    CommerceCommandeCardComponent,
    PanierRecapMobilComponent,
    NavbarCommandeComponent],
  imports: [
    CommonModule,
    MaterialAngularModule,
    NgImageSliderModule,
  ],
  exports: [
    ProduitCommandeCardsComponent,
    PanierCommandeComponent,
    ProduitLivraisonCardComponent,
    CommerceCommandeCardComponent,
    PanierRecapMobilComponent,
    NavbarCommandeComponent
  ]
})
export class ComponentsModule { }
