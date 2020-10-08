import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})
export class PanierCommandeComponent implements OnInit, DoCheck {

  constructor(private panierSvc: PanierSvcService,
              private router: Router) { }
  lstProduitPanier: Array<IProduit>;

  sousTotalProduit;
  commission;
  differ;
  total;

  ngOnInit(): void {
    this.lstProduitPanier = this.panierSvc.lstProduit;
  }

  ngDoCheck(): void {
    this.lstProduitPanier = this.panierSvc.lstProduit;
    this.sousTotalProduit = this.panierSvc.getSousTotalPanier();
    this.commission = 1;
    this.total = this.sousTotalProduit + this.commission;
  }

  onClickValidPanier(): void{
    this.panierSvc.saveProduitsLocalStorage();
    if (this.lstProduitPanier.length > 0){
      this.router.navigate(['/commande/valider_commande']);
    }else{
      // TODO Mesaage d'erreur, sans doute SnackBar
    }

  }
}
