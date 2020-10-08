import { ICategorie } from './../../../core/interfaces/ICategorie';
import { Observable } from 'rxjs';
import { ICamping } from './../../../core/interfaces/ICamping';
import { AppConfig } from 'src/app/config/app-config';
import { HttpClient } from '@angular/common/http';
import { IProduit } from 'src/app/core/interfaces/IProduit';
import { SessionService } from './../../../core/services/session.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PanierSvcService } from 'src/app/core/services/panier-svc.service';

@Component({
  selector: 'app-commande-valide-page',
  templateUrl: './commande-valide-page.component.html',
  styleUrls: ['./commande-valide-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommandeValidePageComponent implements OnInit {

  constructor(private sessionSvc: SessionService,
              private panierSvc: PanierSvcService,
              private httpClient: HttpClient,
              private appConfig: AppConfig) { }

  camping: ICamping;

  ngOnInit(): void {
    const url: string = this.appConfig.apiURL + '/camping/getCampingByUser';
    this.httpClient.get<ICamping>(url, {
      headers: this.sessionSvc.initHttpOption()
    }).subscribe( result => {
      this.camping = result;
    });
  }

  onConfirmationCommande(): void{
    this.panierSvc.confirmerCommande();
  }

}
