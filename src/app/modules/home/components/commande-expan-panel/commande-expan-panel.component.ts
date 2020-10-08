import { ILivraison } from './../../../../core/interfaces/ILivraison';
import { ICommande } from './../../../../core/interfaces/ICommande';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-expan-panel',
  templateUrl: './commande-expan-panel.component.html',
  styleUrls: ['./commande-expan-panel.component.scss']
})
export class CommandeExpanPanelComponent implements OnInit {

  constructor() { }
  @Input() commande: ICommande;
  livraison: ILivraison;
  isLivre = false;
  isCommandeConfirme = false; // flag si la commande est déjà validé et envoyé au commerce
  sousTotalCommande;
  totalCommande;

  ngOnInit(): void {
    /*Le modèle de données permet d'avoir plusieurs livraisons pour une commande.
    Mais pour le moment l'application ne permet qu'une seule livraison par commande.
    Peut être une évolution futur ;)
    */
    this.livraison = this.commande.Livraisons ? this.commande.Livraisons[0] : null;
    if (this.livraison.dateReception){
      this.isLivre = true;
    }
    this.sousTotalCommande = 0;
    this.livraison.LivraisonProduits.forEach( elem => {this.sousTotalCommande += elem.prix; });
    if (!this.commande.commission){
      this.commande.commission = 0;
    }

    this.totalCommande = this.commande.commission + this.sousTotalCommande;
  }

  deleteCommande(event: Event): void{
    // On arrête l'event pour que le panel ne d'expend pas
    event.stopPropagation();

    // Dialog pour confirmation de la suppression de la commande
  }

}
