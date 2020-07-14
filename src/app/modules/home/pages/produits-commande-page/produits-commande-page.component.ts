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
  lstProduit: Array<IProduit>;
  nbrProduitCommande: number;
  sousTotal: number;
  lstProduitPanier: Array<IProduit>;
  async ngOnInit(): Promise<void> {
    console.log('oninit');
    this.lstProduit = await this.panierSvc.getLstProduitCommandable();
    console.log('Un truc Async');
    console.log(this.lstProduit);
    this.lstProduitPanier = this.lstProduit;
    this.panierSvc.majPanierWithCookie(this.lstProduit);
  }

  ngDoCheck(): void {

    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.panierSvc.savePanierCookie();
  }


}
