import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits-commande-page',
  templateUrl: './produits-commande-page.component.html',
  styleUrls: ['./produits-commande-page.component.scss']
})
export class ProduitsCommandePageComponent implements OnInit {


  constructor() { }
  // Données de test déplacer dans un répertoire plus approprié...
  lstProduit: Array<IProduit> = [{
    id: 1,
    commission: 0,
    description: 'Ceci est une baguette genre classique avec une description bien longue pour le saut de ligne',
    nom: 'Baguette tradition',
    idCategorie: 1,
    idCommerce: 1,
    isAvailable: true,
    prix: 1,
    stock: 150
  }, {
    id: 2,
    commission: 0,
    description: 'La bonne boule de grand mère !',
    nom: 'Boule',
    idCategorie: 1,
    idCommerce: 1,
    isAvailable: true,
    prix: 2,
    stock: 150
  },
  {
    id: 3,
    commission: 0,
    description: 'Le pain moulé que personne n\'aime',
    nom: 'Baguette moulé',
    idCategorie: 1,
    idCommerce: 1,
    isAvailable: true,
    prix: 2,
    stock: 150,
    Panier_Produit: {
      nbrProduit: 10
    }
  }
];

lstProduitPanier = this.lstProduit;
  ngOnInit(): void {

  }


}
