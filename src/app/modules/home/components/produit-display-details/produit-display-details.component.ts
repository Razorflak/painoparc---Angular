import { SessionService } from './../../../../core/services/session.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/config/app-config';

import { IProduit } from 'src/app/core/interfaces/IProduit';
import { Component, OnInit, Input } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';
import { of } from 'rxjs';

// Format des items accepté par le composant ng-image-slider
export interface IImageSlider{
  image: string; // chemin ou base 64
  thumbImage: string; // chemin ou base 64
  alt: string;
  title: string;
}


@Component({
  selector: 'app-produit-display-details',
  templateUrl: './produit-display-details.component.html',
  styleUrls: ['./produit-display-details.component.scss']
})



export class ProduitDisplayDetailsComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private sessionSvc: SessionService) { }

  @Input() idProduit: number;

  produit: Promise<IProduit>;
  arrayImgSlider: IImageSlider[] = new Array();

  async ngOnInit(): Promise<void> {
    this.produit = this.getAsyncData();
    // this.produit = await this.loadHttpProduit();
    // const arrayPromiseImg: Array<Promise<string>> = new Array();
    // this.produit.imgFileName.forEach(element => {
    //   const promise: Promise<string> = this.loadHttpProduitImg(element);
    //   arrayPromiseImg.push(promise);
    //   promise.then( base64 => {
    //     this.arrayImgSlider.push({
    //       image: base64,
    //       thumbImage: base64,
    //       alt: '',
    //       title: ''
    //     } as IImageSlider);
    //   });
    // });
  }

  getAsyncData(): Promise<IProduit> {
    // Fake Slow Async Data
    const produitTest: IProduit = {
      commission: 0,
      delaiProduction: 0,
      description: 'Description',
      idCategorie: 0,
      idCommerce: 0,
      isAvailable: true,
      nom: 'La bonne baguette',
      prix: 2,
      stock: 500
    };
    return of(produitTest).toPromise();
  }

  async loadHttpProduit(): Promise<IProduit> {
    const url: string = this.appConfig.apiURL + '/produit/' + this.idProduit.toString();
    const result: IProduit = await this.httpClient.get<IProduit>(url, {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise();
    return result;
  }

  async loadHttpProduitImg(img: string): Promise<string> {
    const url: string = this.appConfig.apiURL + '/produit/getImage/' + img;
    const result: string = await this.httpClient.get<string>(url, {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise();
    return result;
  }

  onClickCommerce(): void{

  }

}
