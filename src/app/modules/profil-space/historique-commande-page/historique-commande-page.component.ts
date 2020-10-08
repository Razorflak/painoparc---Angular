import { SessionService } from './../../../core/services/session.service';
import { AppConfig } from 'src/app/config/app-config';
import { HttpClient } from '@angular/common/http';
import { ICommande } from './../../../core/interfaces/ICommande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-commande-page',
  templateUrl: './historique-commande-page.component.html',
  styleUrls: ['./historique-commande-page.component.scss'],
})
export class HistoriqueCommandePageComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private appconfig: AppConfig,
    private sessionSvc: SessionService
  ) { }
  lstCommande: ICommande[];

  ngOnInit(): void {
    const url = this.appconfig.apiURL + '/commande/lstCommandeByUser';
    this.httpClient.get<ICommande[]>(url, {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise().then(result => {
      this.lstCommande = result;
    });
  }

}
