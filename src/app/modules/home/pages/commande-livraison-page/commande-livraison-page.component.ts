import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-commande-livraison-page',
  templateUrl: './commande-livraison-page.component.html',
  styleUrls: ['./commande-livraison-page.component.scss']
})
export class CommandeLivraisonPageComponent implements OnInit {

  constructor(private panierSvc: PanierSvcService) { }

  panier: IProduit[];

  ngOnInit(): void {

    this.panierSvc.lstProduitPanier.forEach(element => {
      if (element.dateLivraison === undefined){
        // Remplissage des éléments manquantpour la date de livraison
       // TODO sans doute mieux de le gérer par le serveur
        element.dateLivraisonPossible = new Date();
        const delai = element.delaiProduction === undefined ? 1 : element.delaiProduction;
        element.dateLivraisonPossible.setDate( element.dateLivraisonPossible.getDate() + delai );
        element.dateLivraison = element.dateLivraisonPossible;
        console.log(element.dateLivraisonPossible);
      }
    });
    this.panier = this.panierSvc.lstProduitPanier;


    // TODO Ajouter un event sur lstProduitsPanierLivraison pour que l'array de panierSvc suive!
  }

}
