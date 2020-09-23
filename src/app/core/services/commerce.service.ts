import { SessionService } from './session.service';
import { AppConfig } from 'src/app/config/app-config';
import { HttpClient } from '@angular/common/http';
import { ICommerce } from '../interfaces/ICommerce';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private sessionSvc: SessionService) { }

  /**
   * Fonction de récupération de la liste des commerces accéssible par le user connecté
   */
  async loadHttpLstCommerceUser(): Promise<ICommerce[]> {
    const url: string = this.appConfig.apiURL + '/commerce/getCommerceUser';
    console.log(url);
    /*const httpOptions = {
      headers: this.sessionSvc.initHttpOption()
    }*/
    const lstProduit: ICommerce[] = await this.httpClient.get<ICommerce[]>(url, {
      headers: this.sessionSvc.initHttpOption()
    }).toPromise();
    return lstProduit;
  }
}
