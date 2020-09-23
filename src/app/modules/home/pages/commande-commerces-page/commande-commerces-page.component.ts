import { CommerceService } from 'src/app/core/services/commerce.service';
import { Router } from '@angular/router';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { IProduit } from 'src/app/core/interfaces/IProduit';
import { ICommerce } from './../../../../core/interfaces/ICommerce';
import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-commande-commerces-page',
  templateUrl: './commande-commerces-page.component.html',
  styleUrls: ['./commande-commerces-page.component.scss']
})
export class CommandeCommercesPageComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService ,
              private commerceSvc: CommerceService,
              private router: Router) { }

  lstCommerces: ICommerce[];
  lstProduitsPanier: IProduit[];
  dateLivraison: Date;
  nbrProduitCommande;
  sousTotal;


  ngOnInit(): void {
    // Définition de la date de livraison par défaut
    this.dateLivraison = this.panierSvc.dateLivraison;
    this.commerceSvc.loadHttpLstCommerceUser().then(result => {
      console.log(result);
      this.lstCommerces = result;
      this.filterCommerceDateLivraison();
    });


    // Récupération de la liste des commerces en fontion du camping auquel l'utilidateur appartient
    // TODO filtre des commerces ouverts en fonction de la date de livraison
  }

  ngDoCheck(): void {
    this.sousTotal = this.panierSvc.getSousTotalPanier();
    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.panierSvc.saveProduitsLocalStorage();
  }

  filterCommerceDateLivraison(): void{
    // this.lstCommerces.filter
  }

  onDateChange(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.panierSvc.dateLivraison = event.value;
    this.filterCommerceDateLivraison();
  }

  onClickValidPanier(): void{
    // TODO: Sauvegarde du panier et faire le navigate sur le retour
    this.panierSvc.saveProduitsLocalStorage();
    this.router.navigate(['/valider_commande']);
  }

}
