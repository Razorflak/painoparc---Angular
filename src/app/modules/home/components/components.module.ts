import { MaterialAngularModule } from './../../../material-angular/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCommandeCardsComponent } from './produit-commande-cards/produit-commande-cards.component';


@NgModule({
  declarations: [ProduitCommandeCardsComponent],
  imports: [
    CommonModule,
    MaterialAngularModule
  ],
  exports: [
    ProduitCommandeCardsComponent
  ]
})
export class ComponentsModule { }
