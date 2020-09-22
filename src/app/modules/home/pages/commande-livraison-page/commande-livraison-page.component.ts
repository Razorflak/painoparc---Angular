import { Component, OnInit } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-commande-livraison-page',
  templateUrl: './commande-livraison-page.component.html',
  styleUrls: ['./commande-livraison-page.component.scss']
})
export class CommandeLivraisonPageComponent implements OnInit {

  constructor(private panierSvc: PanierSvcService) { }

  // Dans cet écran on traite des tableaux de tableau de produits pour gérer les cas de commande multiple d'un même produit
  lstProduitsPanierLivraison: Array<any>;

  ngOnInit(): void {

    this.lstProduitsPanierLivraison = new Array();
    this.panierSvc.lstProduitPanier.forEach(element => {
      if (element.dateLivraison === undefined){
        // Remplissage des éléments manquantpour la date de livraison
        element.dateLivraisonPossible = new Date();
        const delai = element.delaiProduction === undefined ? 1 : element.delaiProduction;
        element.dateLivraisonPossible.setDate( element.dateLivraisonPossible.getDate() + delai );
        element.dateLivraison = element.dateLivraisonPossible;
      }
      this.lstProduitsPanierLivraison.push([element]);
    });

    // TODO Ajouter un event sur lstProduitsPanierLivraison pour que l'array de panierSvc suive!
  }

}
