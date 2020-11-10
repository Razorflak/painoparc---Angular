import { IPanier } from './../../../../core/interfaces/IPanier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-sauvegarde',
  templateUrl: './panier-sauvegarde.component.html',
  styleUrls: ['./panier-sauvegarde.component.scss']
})
export class PanierSauvegardeComponent implements OnInit {

  constructor() { }
  nomPanier;
  lstPaniersSave: IPanier[];
  selectedPanier;
  collapse;

  ngOnInit(): void {
    this.collapse = true;

    this.lstPaniersSave = new Array();
    this.lstPaniersSave.push({
      nom: 'toto',
      dateCreation: new Date(),
      dateMiseAJour: new Date(),
      idUser: 1,
      isFavori: false
    } as IPanier);

    this.lstPaniersSave.push({
      nom: 'titi',
      dateCreation: new Date(),
      dateMiseAJour: new Date(),
      idUser: 1,
      isFavori: false
    } as IPanier);

    this.lstPaniersSave.push({
      nom: 'tata',
      dateCreation: new Date(),
      dateMiseAJour: new Date(),
      idUser: 1,
      isFavori: false
    } as IPanier);

  }

  onClickHeader(): void {
    this.collapse = !this.collapse;
  }

  onClickEnregistrerPanier(): void {
  }

}
