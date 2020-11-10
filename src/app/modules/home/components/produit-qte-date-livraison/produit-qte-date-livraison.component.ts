import { FormControl } from '@angular/forms';
import { IProduit } from './../../../../core/interfaces/IProduit';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-produit-qte-date-livraison',
  templateUrl: './produit-qte-date-livraison.component.html',
  styleUrls: ['./produit-qte-date-livraison.component.scss']
})
export class ProduitQteDateLivraisonComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService) { }

  @Input() produit: IProduit;
  panier: IProduit[];
  ngOnInit(): void {
    this.panier = this.panierSvc.lstProduitPanier;


  }

  ngDoCheck(): void {
  }

  onDateChange(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.produit.dateLivraison = event.value;
  }

  onClickRemove(): void{
    this.panierSvc.removeOneNbrProduitPanier(this.produit);
  }

  onClickAdd(): void{
    this.panierSvc.addOneNbrProduitPanier(this.produit);
  }

  OnDeleteItemLivraison(produit: IProduit): void{
    /*const indx: number = this.panierSvc.lstProduitPanier.indexOf(produit);
    this.panierSvc.lstProduitPanier = this.panierSvc.lstProduitPanier.filter( item => item !== produit);*/
    produit.Panier_Produit.nbrProduit = 0;
  }

  /**
   * TODO: Implémenter le controle des dates pour que l'utilisateur ne puisse pas:
   *  saisir une date antérieur à la date du jour
   *  saisit une date où le commerçant est fermé (soit jour hebdomadaire ou jour défini manuellement)
   *
   */


}
