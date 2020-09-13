import { Component, OnInit } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-commnde-livraison-page',
  templateUrl: './commnde-livraison-page.component.html',
  styleUrls: ['./commnde-livraison-page.component.scss']
})
export class CommndeLivraisonPageComponent implements OnInit {

  constructor(private panierSvc: PanierSvcService) { }

  // Dans cet écran on traite des tableaux de tableau de produits pour gérer les cas de commande multiple d'un même produit
  lstProduitsPanierLivraison: Array<any>;

  ngOnInit(): void {

    if (this.panierSvc.lstProduitsPanierLivraison === undefined){
      this.lstProduitsPanierLivraison = new Array();
      this.panierSvc.lstProduitPanier.forEach(element => {
        if (element.dateLivraison === undefined){
          element.dateLivraison = element.dateLivraisonPossible;
        }
        this.lstProduitsPanierLivraison.push([element]);
      });
    } else {
      this.lstProduitsPanierLivraison = this.panierSvc.lstProduitsPanierLivraison;
    }


  }

}
