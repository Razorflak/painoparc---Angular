import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-produits-commande-page',
  templateUrl: './produits-commande-page.component.html',
  styleUrls: ['./produits-commande-page.component.scss']
})
export class ProduitsCommandePageComponent implements OnInit, DoCheck {


  constructor(private panierSvc: PanierSvcService) { }
  lstProduit;
  nbrProduitCommande: number;
  sousTotal: number;
  lstProduitPanier: Array<IProduit>;
  ngOnInit(): void {
    this.lstProduit = this.panierSvc.getLstProduitCommandable();
                  /*.subscribe(resp => {
                    console.log('Resp lst Produit');
                    console.log(resp);
                    // this.lstProduit = of(resp);
                  },
                  error => {
                    console.log('Error chargement lstProduit');
                    console.log(error);
                  },
                  () => {
                    console.log('onComplet Chargement lstProuit');
                  })
                  ;*/
    this.lstProduitPanier = this.lstProduit;
    this.panierSvc.majPanierWithCookie(this.lstProduit);
  }
  ngDoCheck(): void {

    /*this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.panierSvc.savePanierCookie();*/
  }


}
