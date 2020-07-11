import { Component, OnInit, Input } from '@angular/core';
import { IProduit } from 'src/app/core/interfaces/IProduit';

@Component({
  selector: 'app-produit-panier',
  templateUrl: './produit-panier.component.html',
  styleUrls: ['./produit-panier.component.scss']
})
export class ProduitPanierComponent implements OnInit {

  constructor() { }

  @Input() produit: IProduit;
  ngOnInit(): void {
  }
}
