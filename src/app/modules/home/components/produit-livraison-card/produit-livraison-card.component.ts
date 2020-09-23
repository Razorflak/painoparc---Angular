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

  arrayProduit: Array<IProduit>;
  @Input() produitReference: IProduit;

  ngOnInit(): void {
    this.arrayProduit = this.panierSvc.lstProduitPanier.filter(element => element.id === this.produitReference.id);
  }


  onAddItemLivraison(): void{
    const newItem = JSON.parse(JSON.stringify(this.produitReference));
    this.panierSvc.lstProduitPanier.push(newItem);
    this.arrayProduit = this.panierSvc.lstProduitPanier.filter(element => element.id === this.produitReference.id);
  }

}
