import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private panierSvc: PanierSvcService) { }
  @Input() produit: IProduit;
  ngOnInit(): void {
    if (this.produit.Panier_Produit == null){
      this.produit.Panier_Produit = {
        nbrProduit: 0,
        ProduitId: this.produit.id
      };
    }
  }

  onClickRemove(): void {
    this.panierSvc.removeOneNbrProduitPanier(this.produit);
  }

  onClickAdd(): void {
    this.panierSvc.addOneNbrProduitPanier(this.produit);
  }
}
