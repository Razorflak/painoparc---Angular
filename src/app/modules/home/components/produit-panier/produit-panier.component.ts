import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { Component, OnInit, Input } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';

@Component({
  selector: 'app-produit-panier',
  templateUrl: './produit-panier.component.html',
  styleUrls: ['./produit-panier.component.scss']
})
export class ProduitPanierComponent implements OnInit {

  constructor(private panierSvc: PanierSvcService) { }

  @Input() produit: IProduit;
  @Input() canModifQte = false;
  ngOnInit(): void {
  }


  onClickRemove(): void {
    this.panierSvc.removeOneNbrProduitPanier(this.produit);
  }

  onClickAdd(): void {
    this.panierSvc.addOneNbrProduitPanier(this.produit);
  }
}
