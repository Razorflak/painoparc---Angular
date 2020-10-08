import { Router } from '@angular/router';
import { PanierSvcService } from './../../../../core/services/panier-svc.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-panier-recap-mobil',
  templateUrl: './panier-recap-mobil.component.html',
  styleUrls: ['./panier-recap-mobil.component.scss']
})
export class PanierRecapMobilComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService,
              private router: Router) { }

  nbrProduitCommande;
  sousTotal: number;

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    this.nbrProduitCommande = this.panierSvc.getNbrProduitPanier();
    this.sousTotal = this.panierSvc.getSousTotalPanier();

  }

  onClickValidPanier(): void{
    // TODO: Sauvegarde du panier et faire le navigate sur le retour
    this.panierSvc.saveProduitsLocalStorage();
    this.router.navigate(['/commande/valider_commande']);
  }

}
