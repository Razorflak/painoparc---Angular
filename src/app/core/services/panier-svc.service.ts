import { ICategorie } from './../interfaces/ICategorie';
import { ICommerce } from './../interfaces/ICommerce';
import { IPanier } from './../interfaces/IPanier';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IProduit } from './../interfaces/IProduit';
import { Injectable, Injector } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from 'src/app/config/app-config';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
              private sessionSvc: SessionService,
              // private snackBar: MatSnackBar,
              private injector: Injector) {
    const lstProduitLS: IProduit[] = JSON.parse(window.localStorage.getItem('currentPanier'));
    const today: Date = new Date();
    const tomorrow: Date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    if (window.localStorage.getItem('dateLivraison')){
      const dateLivraisonLS: Date = new Date(Date.parse(window.localStorage.getItem('dateLivraison')));
      this.dateLivraisonSvc = dateLivraisonLS;
      // Si la date de livraison n'est pas valide, on met pour le lendemaim
      if (dateLivraisonLS < tomorrow){
        this.dateLivraisonSvc = tomorrow;
      }
    }else{
      this.dateLivraisonSvc = tomorrow;
    }
    if (lstProduitLS){
      this.lstProduit = lstProduitLS;
    }else{
      this.lstProduit = new Array();
    }
    // TODO demander au back, la liste des produits commandable dans la liste des produits du panier.


  }

  lstProduit: Array<IProduit>;
  private dateLivraisonSvc: Date;
  lstPanierCat: ICategorie[];


  get dateLivraison(): Date {
    if (this.dateLivraisonSvc === undefined){
      this.dateLivraisonSvc = new Date();
      this.dateLivraisonSvc.setDate((new Date()).getDate() + 1);
    }
    return this.dateLivraisonSvc;
  }

  set dateLivraison(value: Date){
    this.dateLivraisonSvc = value;
  }

    get lstProduitPanier(): IProduit[]{
      return this.lstProduit.filter(prod => prod.Panier_Produit != null && prod.Panier_Produit.nbrProduit > 0);
    }

  /**
   * Fonction de récupération de la liste des produits commandable pour le user courant par Commerce
   */
  async loadHttpLstProduitCommandableByCommerce(idCommerce: number): Promise<any> {
    const url: string = this.appConfig.apiURL + '/produit/ProduitByCommerce';
    /*const httpOptions = {
      headers: this.sessionSvc.initHttpOption()
    }*/
    const commerce: ICommerce = await this.httpClient.get<any>(url, {
      headers: this.sessionSvc.initHttpOption(),
      params: new HttpParams().set('idCommerce', idCommerce.toString())
    }).toPromise();
    return commerce;
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
    let prodPanier: IProduit = this.lstProduit.find(elem => elem.id === produit.id);
    if (!prodPanier){
      prodPanier = JSON.parse(JSON.stringify(produit));
      this.lstProduit.push(prodPanier);
    }
    prodPanier.Panier_Produit = JSON.parse(JSON.stringify(produit.Panier_Produit));

    this.saveProduitsLocalStorage();
    // TODO sans doute règle de gestion à ajouté pour limité l'ajout par rapport au stock
  }

  /**
   * -1 nbr produit dans le panier
   * @param produit produit à modifier
   */
  removeOneNbrProduitPanier(produit: IProduit): void {
    // MAJ de l'item du component
    if (produit.Panier_Produit == null) {
      produit.Panier_Produit = {
        nbrProduit: 0,
        ProduitId: produit.id
      };
    }
    if (produit.Panier_Produit.nbrProduit >= 1){
      produit.Panier_Produit.nbrProduit -= 1;
    }

    // Récupération de l'objt correspondant dans la liste des produits du panier
    const prodPanier: IProduit = this.lstProduit.find(elem => elem.id === produit.id);
    if (!prodPanier){
      return;
    }
    prodPanier.Panier_Produit = JSON.parse(JSON.stringify(produit.Panier_Produit));
    if (prodPanier.Panier_Produit.nbrProduit === 0){
      this.lstProduit = this.lstProduit.filter(elem => elem.id !== prodPanier.id);
    }
    this.saveProduitsLocalStorage();
    // TODO sans doute règle de gestion à ajouté pour limité l'ajout par rapport au stock
  }

  getSousTotalPanier(): number{
    if (this.lstProduitPanier === undefined){
      return 0;
    }
    let sousTotal = 0;
    this.lstProduitPanier.forEach(produit => {
      if (produit.Panier_Produit != null){
        sousTotal += produit.Panier_Produit.nbrProduit * produit.prix;
      }
    });
    return sousTotal;
  }

  getNbrProduitPanier(): number{
    let nbrProduit = 0;
    if (this.lstProduitPanier === undefined){
      return 0;
    }
    this.lstProduitPanier.forEach(produit => {
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
    }

  }

  createPanier(nomFav: string, lstProduit: IProduit[]): IPanier{
    const panier: IPanier = {
      idUser: this.sessionSvc._userId,
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

  async majPanier(): Promise<ICategorie[]>{
    const url: string = this.appConfig.apiURL + '/panier/majInfoPanier';
    return this.httpClient.post<ICategorie[]>(url, {Produits: this.lstProduit}, {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise();
  }

  confirmerCommande(): void{
    const url = this.appConfig.apiURL + '/commande/valider';
    const body = {
      Produits: JSON.stringify(this.lstProduit),
      dateLivraison: this.dateLivraison.toString()
    };
    const resultHttp: Observable<any> = this.httpClient.post(url, body, {
      headers: this.sessionSvc.initHttpOption(),
    });

    resultHttp.subscribe( result => {
      if (result.result){
        // Vidage du LS
        localStorage.removeItem('currentPanier');
        localStorage.removeItem('dateLivraison');
        this.lstProduit = new Array();
        this.dateLivraison = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        /*this.snackBar.open('Commande validé', '', {
          duration: 3000,
          panelClass: ['mat-toolbar']
        }).afterDismissed().subscribe( () => {
          this.injector.get(Router).navigate(['']);

        });*/
      }
    });

  }
}
