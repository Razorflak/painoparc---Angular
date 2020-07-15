import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IProduit } from './../interfaces/IProduit';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from 'src/app/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class PanierSvcService {


  constructor(private cookieSvc: CookieService,
              private httpClient: HttpClient,
              private appConfig: AppConfig,
              private sessionSvc: SessionService) { }

  lstProduitCommandable: Array<IProduit>;
  /**
   * Fonction de récupération de la liste des produits commandable pour le user courant
   */
  getLstProduitCommandable(): Observable<IProduit[]> {
    /*this.lstProduitCommandable =  [{
      id: 1,
      commission: 0,
      description: 'Ceci est une baguette genre classique avec une description bien longue',
      nom: 'Baguette tradition',
      idCategorie: 1,
      idCommerce: 1,
      isAvailable: true,
      prix: 1,
      stock: 150
    }, {
      id: 2,
      commission: 0,
      description: 'La bonne boule de grand mère !',
      nom: 'Boule',
      idCategorie: 1,
      idCommerce: 1,
      isAvailable: true,
      prix: 2,
      stock: 150
    },
    {
      id: 3,
      commission: 0,
      description: 'Le pain moulé que personne n\'aime',
      nom: 'Baguette moulé',
      idCategorie: 1,
      idCommerce: 1,
      isAvailable: true,
      prix: 2,
      stock: 150
    }
  ];*/

  const url: string = this.appConfig.apiURL + '/produit/allProduitPourCommande';
  console.log(url);
  /*const httpOptions = {
    headers: this.sessionSvc.initHttpOption()
  }*/
  return this.httpClient.get<IProduit[]>(this.appConfig.apiURL + '/produit/allProduitPourCommande', {
    headers: this.sessionSvc.initHttpOption()
  });
  }

  /**
   * +1 nbr produit dans le panier
   * @param produit Produit à modifier
   */
  addOneNbrProduitPanier(produit: IProduit): void {
    if (produit.Panier_Produit == null) {
      produit.Panier_Produit = {
        nbrProduit: 0,
        ProduitId: produit.id
      };
    }
    produit.Panier_Produit.nbrProduit += 1;

    // TODO sans doute règle de gestion à ajouté pour limité l'ajout par rapport au stock
  }

  /**
   * -1 nbr produit dans le panier
   * @param produit produit à modifier
   */
  removeOneNbrProduitPanier(produit: IProduit): void {
    if (produit.Panier_Produit == null) {
      produit.Panier_Produit = {
        nbrProduit: 0,
        ProduitId: produit.id
      };
    }
    if (produit.Panier_Produit.nbrProduit >= 1){
      produit.Panier_Produit.nbrProduit -= 1;
    }
    //TODO sans doute règle de gestion à ajouté pour limité l'ajout par rapport au stock
  }

  getSousTotalPanier(): number{
    if (this.lstProduitCommandable === undefined){
      return 0;
    }
    let sousTotal = 0;
    this.lstProduitCommandable.forEach(produit => {
      if (produit.Panier_Produit != null){
        sousTotal += produit.Panier_Produit.nbrProduit * produit.prix;
      }
    });
    return sousTotal;
  }

  getNbrProduitPanier(): number{
    let nbrProduit = 0;
    if (this.lstProduitCommandable === undefined){
      return 0;
    }
    this.lstProduitCommandable.forEach(produit => {
      if (produit.Panier_Produit != null){
        nbrProduit += produit.Panier_Produit.nbrProduit;
      }
    });
    return nbrProduit;
  }

  savePanierCookie(): void {
    if (this.lstProduitCommandable === undefined){
      return;
    }
    this.cookieSvc.set('currentPanier', JSON.stringify(
      this.lstProduitCommandable.filter(prod => prod.Panier_Produit != null && prod.Panier_Produit.nbrProduit > 0)
      )
      , 1000000000000000000000);
      // TODO revoir le temps du Cookie
  }

  majPanierWithCookie(lstProduit: IProduit[]): void {
    if (this.lstProduitCommandable === undefined){
      return;
    }
    const cookiePanier = this.cookieSvc.get('currentPanier');
    let lstPanierCookie: Array<IProduit>;
    if ( cookiePanier.length > 0){
      lstPanierCookie = JSON.parse(cookiePanier);
      lstPanierCookie.forEach(produitCookie => {
        const produitEcran = this.lstProduitCommandable.find(p => p.id === produitCookie.id);
        if (produitEcran != null){
          if (produitEcran.Panier_Produit == null){
            produitEcran.Panier_Produit = {
              ProduitId: produitEcran.id,
              nbrProduit: 0
            };
            produitEcran.Panier_Produit.nbrProduit = produitCookie.Panier_Produit.nbrProduit;
          }
        }
      });

    }
  }

}
