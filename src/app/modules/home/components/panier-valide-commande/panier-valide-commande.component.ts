import { ICategorie } from './../../../../core/interfaces/ICategorie';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, DoCheck } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-panier-valide-commande',
  templateUrl: './panier-valide-commande.component.html',
  styleUrls: ['./panier-valide-commande.component.scss']
})
export class PanierValideCommandeComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService) { }


  lstCatProduitPanier: ICategorie[];
  sousTotalProduit;
  commission;
  total;

  ngOnInit(): void {
    this.panierSvc.majPanier().then(result => {
      result.forEach(cat => {
        cat.Produits.forEach(prod => {
          prod.Panier_Produit = this.panierSvc.lstProduit.find(elem => elem.id === prod.id).Panier_Produit;
        })
      });
      this.lstCatProduitPanier = result;

    });
  }

  ngDoCheck(): void {
    this.sousTotalProduit = this.panierSvc.getSousTotalPanier();
    this.commission = 1;
    this.total = this.sousTotalProduit + this.commission;
  }

  onClickValidCommande(): void{
    this.panierSvc.confirmerCommande();
  }

}
