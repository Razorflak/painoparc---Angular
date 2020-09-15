import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, Input, OnInit } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';


@Component({
  selector: 'app-produit-livraison-card',
  templateUrl: './produit-livraison-card.component.html',
  styleUrls: ['./produit-livraison-card.component.scss']
})
export class ProduitLivraisonCardComponent implements OnInit {

  constructor(private panierSvc: PanierSvcService) { }

  @Input() arrayProduit: Array<IProduit>;
  produitReference: IProduit;

  ngOnInit(): void {
    this.produitReference = this.arrayProduit[0];
  }

  OnDeleteItemLivraison(produit: IProduit): void{
    const indx: number = this.arrayProduit.indexOf(produit);
    this.arrayProduit = this.arrayProduit.filter( item => item !== produit);
  }

  onAddItemLivraison(): void{
    const newItem = JSON.parse(JSON.stringify(this.produitReference));
    this.arrayProduit.push(newItem);
  }

}
