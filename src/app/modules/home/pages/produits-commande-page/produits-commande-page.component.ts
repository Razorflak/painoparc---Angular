import { Observable } from 'rxjs';
import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-produits-commande-page',
  templateUrl: './produits-commande-page.component.html',
  styleUrls: ['./produits-commande-page.component.scss']
})
export class ProduitsCommandePageComponent implements OnInit, DoCheck {

  isPanierLoad = false;

  constructor(private panierSvc: PanierSvcService) { }
  obsHttpLstPanier: Observable<IProduit[]>;
  lstProduitPanier;
  nbrProduitCommande: number;
  sousTotal: number;

  ngOnInit(): void {
    this.obsHttpLstPanier = this.panierSvc.loadHttpLstProduitCommandable();
    this.obsHttpLstPanier.subscribe (data => {
      console.log(data);
      this.panierSvc.lstProduitCommandable = data;
      this.lstProduitPanier = data;
      this.panierSvc.majPanierWithCookie();
      this.isPanierLoad = true;
    });


  }
  ngDoCheck(): void {
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.panierSvc.savePanierCookie();
  }
}
