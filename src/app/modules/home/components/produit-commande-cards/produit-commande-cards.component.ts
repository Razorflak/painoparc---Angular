import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-produit-commande-cards',
  templateUrl: './produit-commande-cards.component.html',
  styleUrls: ['./produit-commande-cards.component.scss']
})



export class ProduitCommandeCardsComponent implements OnInit {


  tiles: Tile[] = [
    // Image du produit
    {text: 'Produit', cols: 1, rows: 3, color: 'lightblue'},
    // Titre du produit
    {text: 'Baguette tradition', cols: 3, rows: 1, color: 'lightgreen'},
    // Description du produit
    {text: 'Cecie est une putain de baguette qui rocks !', cols: 3, rows: 1, color: 'lightpink'},
    // Action sur le produit
    {text: 'La tu peux faire des trucs', cols: 3, rows: 1, color: '#DDBDF1'},
  ];

  nbrProduit: string;

  constructor() { }

  ngOnInit(): void {
    this.nbrProduit = '100';
  }
}
