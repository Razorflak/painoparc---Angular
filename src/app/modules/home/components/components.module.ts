import { NgImageSliderModule } from 'ng-image-slider';
import { MaterialAngularModule } from './../../../material-angular/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCommandeCardsComponent } from './produit-commande-cards/produit-commande-cards.component';
import { PanierCommandeComponent } from './panier-commande/panier-commande.component';
import { ProduitPanierComponent } from './produit-panier/produit-panier.component';
import { ProduitDisplayDetailsComponent } from './produit-display-details/produit-display-details.component';


@NgModule({
  declarations: [ProduitCommandeCardsComponent, PanierCommandeComponent, ProduitPanierComponent, ProduitDisplayDetailsComponent],
  imports: [
    CommonModule,
    MaterialAngularModule,
    NgImageSliderModule,
  ],
  exports: [
    ProduitCommandeCardsComponent,
    PanierCommandeComponent
  ]
})
export class ComponentsModule { }
