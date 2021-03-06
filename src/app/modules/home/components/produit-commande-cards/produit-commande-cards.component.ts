import { ProduitDisplayDetailsComponent } from './../produit-display-details/produit-display-details.component';
import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppConfig } from 'src/app/config/app-config';

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

  constructor(private panierSvc: PanierSvcService,
              private matDialog: MatDialog,
              private appConfig: AppConfig) { }

  urlImage: string;
  @Input() produit: IProduit;
  ngOnInit(): void {
    this.urlImage = this.appConfig.assetsURL + `/img/produit/${this.produit.id.toString()}/main.jpg`;
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

  onClickCheck(): void {
    const dialConfig: MatDialogConfig = new MatDialogConfig();
    this.matDialog.open(ProduitDisplayDetailsComponent, dialConfig);
  }
}
