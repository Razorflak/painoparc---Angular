import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})
export class PanierCommandeComponent implements OnInit, DoCheck {

  constructor() { }
  @Input() lstProduitPanier: Array<IProduit>;
  lstProduitNofFilter: Array<IProduit>;

  sousTotalProduit;
  commission;
  differ;

  ngOnInit(): void {
    this.lstProduitNofFilter = this.lstProduitPanier;
  }

  ngDoCheck(): void {

    this.lstProduitPanier = this.lstProduitNofFilter.filter(prod => prod.Panier_Produit != null && prod.Panier_Produit.nbrProduit > 0);
    console.log(this.lstProduitPanier);
  }

}
