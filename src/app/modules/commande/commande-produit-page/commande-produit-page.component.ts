import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ICommerce } from './../../../core/interfaces/ICommerce';
import { IPanier } from './../../../core/interfaces/IPanier';
import { ITheme } from './../../../core/interfaces/ITheme';
import { IProduit } from './../../../core/interfaces/IProduit';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-commande-produit-page',
  templateUrl: './commande-produit-page.component.html',
  styleUrls: ['./commande-produit-page.component.scss']
})
export class CommandeProduitPageComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService,
              private router: Router,
              private route: ActivatedRoute) { }
  obsHttpLstPanier: Observable<IProduit[]>;
  lstThemes: ITheme[];
  nbrProduitCommande: number;
  sousTotal: number;
  panier: IPanier;
  dateLivraison: Date;
  commerce: ICommerce;

  ngOnInit(): void {
    const idCommerce: number = +this.route.snapshot.paramMap.get('idCommerce');
    this.panierSvc.loadHttpLstProduitCommandableByCommerce(idCommerce).then(result => {
      if (!result){
        // Pas de commerce trouvé, ça peut être un problème de droit ou pas de commerce à cet id
        // redirection vers la liste des commerces
        this.router.navigate(['/commander']);
        return;
      }
      this.commerce = result.Commerce;
      this.lstThemes = result.Themes;
      this.mergePanierLstProduits();
    });

    // Définition de la date de livraison par défaut
    this.dateLivraison = new Date();
    this.dateLivraison.setDate((new Date()).getDate() + 1);
  }

  ngDoCheck(): void {
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.panierSvc.saveProduitsLocalStorage();
  }

  mergePanierLstProduits(): void{
    this.lstThemes.forEach(theme => {
      theme.Categories.forEach(cat => {
        cat.Produits.forEach(prod => {
          const prodCorresp: IProduit = this.panierSvc.lstProduit.find(elem => elem.id === prod.id);
          if (prodCorresp !== undefined){
            prod.Panier_Produit = JSON.parse(JSON.stringify(prodCorresp.Panier_Produit));
          }
        });
      });
    });
  }

  onDateChange(type: string, event: MatDatepickerInputEvent<Date>): void {

  }

  onClickValidPanier(): void{
    // TODO: Sauvegarde du panier et faire le navigate sur le retour
    this.panierSvc.saveProduitsLocalStorage();
    this.router.navigate(['/commande/valider_commande']);
  }


}
