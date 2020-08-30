import { IPanier } from './../interfaces/IPanier';
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

/**
 * Cette classe ce nomme panier par usage,
 * mais la notion de Panier dans l'application n'est utilisé que si l'utilisateur
 * choisi de sauvegarder son panier comme favori pour le réutiliser
 *
 * Seul une liste des produits en cour de commande sont sauvegardés dans une liste
 */
export class PanierSvcService {



  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private sessionSvc: SessionService) { }

  lstProduit: Array<IProduit>;
  currentLstProduits: IPanier;

    get lstProduitPanier(): IProduit[]{
      if(this.lstProduit === undefined){
        return null;
      }
      return this.lstProduit.filter(prod => prod.Panier_Produit != null && prod.Panier_Produit.nbrProduit > 0);
    }

  /**
   * Fonction de récupération de la liste des produits commandable pour le user courant
   */
  async loadHttpLstProduitCommandable(): Promise<IProduit[]> {
    const url: string = this.appConfig.apiURL + '/produit/allProduitPourCommande';
    console.log(url);
    /*const httpOptions = {
      headers: this.sessionSvc.initHttpOption()
    }*/
    const lstProduit: IProduit[] = await this.httpClient.get<IProduit[]>(this.appConfig.apiURL + '/produit/allProduitPourCommande', {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise();
    return lstProduit;
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
    // TODO sans doute règle de gestion à ajouté pour limité l'ajout par rapport au stock
  }

  getSousTotalPanier(): number{
    if (this.lstProduit === undefined){
      return 0;
    }
    let sousTotal = 0;
    this.lstProduit.forEach(produit => {
      if (produit.Panier_Produit != null){
        sousTotal += produit.Panier_Produit.nbrProduit * produit.prix;
      }
    });
    return sousTotal;
  }

  getNbrProduitPanier(): number{
    let nbrProduit = 0;
    if (this.lstProduit === undefined){
      return 0;
    }
    this.lstProduit.forEach(produit => {
      if (produit.Panier_Produit != null){
        nbrProduit += produit.Panier_Produit.nbrProduit;
      }
    });
    return nbrProduit;
  }

  saveProduitsLocalStorage(): void {
    // TODO revoir le temps du Cookie
    if (this.lstProduitPanier === null){
      return null;
    }
    localStorage.setItem('currentPanier', JSON.stringify(this.lstProduitPanier));
  }

  mergeQteLstProduitsLocalStorage(lstProduit: IProduit[], lstProduitPanier: IProduit[]): IPanier {
    if (lstProduit === undefined){
      return;
    }
    const cookiePanier = lstProduitPanier;
    try {
      lstProduitPanier.forEach(produitCookie => {
        const produitEcran = lstProduit.find(p => p.id === produitCookie.id);
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
    } catch (error) {
      console.log('Erreur de mise à jour du panier avec le cookie');
      console.log(error);
    }

  }

  createPanier(nomFav: string, lstProduit: IProduit[]): IPanier{
    const panier: IPanier = {
      idUser: this.sessionSvc.userId,
      nom: nomFav,
      dateCreation: new Date(),
      dateMiseAJour: new Date(),
      isFavori: true,
      Produits: lstProduit
    };
    return panier;
  }

  savePanier(panier: IPanier): void {
    const url: string = this.appConfig.apiURL + '/produit/savePanier';
    const obsPanier: Observable<IPanier> = this.httpClient.post<IPanier>(url, panier, {
      headers: this.sessionSvc.initHttpOption()
    });

    obsPanier.subscribe();
  }
}
