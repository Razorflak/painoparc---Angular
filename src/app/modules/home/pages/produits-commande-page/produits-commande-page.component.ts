import { SessionService } from './../../../../core/services/session.service';
import { ICategorie } from './../../../../core/interfaces/ICategorie';
import { Observable } from 'rxjs';
import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits-commande-page',
  templateUrl: './produits-commande-page.component.html',
  styleUrls: ['./produits-commande-page.component.scss']
})
export class ProduitsCommandePageComponent implements OnInit, DoCheck {

  isPanierLoad = false;

  constructor(private panierSvc: PanierSvcService,
              private router: Router,
              private sessionSvc: SessionService) { }
  obsHttpLstPanier: Observable<IProduit[]>;
  lstProduitPanier;
  lstCategorie;
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
      this.createLstCategorie();
    });


  }

  createLstCategorie(): void{
    const lstCategorie: any[] = new Array();
    this.lstProduitPanier.forEach(produit => {
      let cat = lstCategorie.find( categorie => categorie.id === produit.Categorie.id);
      if (cat === undefined){
        cat = {
          id: produit.Categorie.id,
          libelle: produit.Categorie.libelle,
          produits: new Array()
        };
        lstCategorie.push(cat);
      }
      cat.produits.push(produit);
    });
    this.lstCategorie = lstCategorie;
  }

  ngDoCheck(): void {
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.panierSvc.savePanierCookie();
  }

  onClickValidPanier(): void{
    // TODO: Sauvegarde du panier et faire le navigate sur le retour
    console.log('Coucou');
    console.log(this.sessionSvc.token);
    this.router.navigate(['/valider_commande']);
  }
}
