import { Observable } from 'rxjs';
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

  uploadImgCommerce(files: Array<File>, idCommerce): Observable<object>{
    const url: string = this.appConfig.apiURL + '/commerce/uploadImgCommerce';
    const formData: any = new FormData();
    for (const file of files){
      formData.append('file', file, file.name);
    }
    formData.append('idCommerce', idCommerce);
    return this.httpClient.post(url, formData, {
      headers: this.sessionSvc.initHttpOption(2),
      reportProgress: true,
      responseType: 'json'
    });
  }

  getLstImageByCommerce(idCommerce: string): Promise<Array<string>> {
    const url: string = this.appConfig.apiURL + '/commerce/lstImagesMiniatureCommerce';
    return this.httpClient.get<Array<string>>(url,
      {
        headers: this.sessionSvc.initHttpOption(0)
      }).toPromise();
  }
}
