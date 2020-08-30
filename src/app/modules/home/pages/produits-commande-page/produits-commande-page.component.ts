import { IPanier } from './../../../../core/interfaces/IPanier';
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


  constructor(private panierSvc: PanierSvcService,
              private router: Router) { }
  obsHttpLstPanier: Observable<IProduit[]>;
  lstProduit;
  lstCategorie;
  nbrProduitCommande: number;
  sousTotal: number;
  panier: IPanier;

  ngOnInit(): void {
    this.panierSvc.loadHttpLstProduitCommandable().then(result => {
      this.lstProduit = result;
      this.panierSvc.lstProduit = result;
      const lstProduitLS: IProduit[] = JSON.parse(window.localStorage.getItem('currentPanier'));
      if (lstProduitLS !== null){
        console.log(result);
        console.log(lstProduitLS);
        this.panierSvc.mergeQteLstProduitsLocalStorage(result, lstProduitLS);
      }
      this.createLstCategorie(this.lstProduit);
    });
  }

  createLstCategorie(lstProduit: IProduit[]): void{
    const lstCategorie: any[] = new Array();
    lstProduit.forEach(produit => {
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
    this.panierSvc.saveProduitsLocalStorage();
  }

  onClickValidPanier(): void{
    // TODO: Sauvegarde du panier et faire le navigate sur le retour
    this.panierSvc.saveProduitsLocalStorage();
    this.router.navigate(['/valider_commande']);
  }


}
