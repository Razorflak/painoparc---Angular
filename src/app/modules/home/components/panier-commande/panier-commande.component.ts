import { Component, OnInit, Input } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})
export class PanierCommandeComponent implements OnInit {

  constructor() { }
  @Input() lstProduitPanier: Array<IProduit>;
  ngOnInit(): void {
  }

}
