import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})
export class PanierCommandeComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService) { }
  @Input() lstProduitPanier: Array<IProduit>;
  lstProduitNofFilter: Array<IProduit>;

  sousTotalProduit;
  commission;
  differ;
  total;

  ngOnInit(): void {
    this.lstProduitNofFilter = this.lstProduitPanier;
  }

  ngDoCheck(): void {
    if (this.lstProduitNofFilter === undefined){
      return;
    }
    this.lstProduitPanier = this.lstProduitNofFilter.filter(prod => prod.Panier_Produit != null && prod.Panier_Produit.nbrProduit > 0);
    this.sousTotalProduit = this.panierSvc.getSousTotalPanier();
    this.commission = 1;
    this.total = this.sousTotalProduit + this.commission;
  }
}
