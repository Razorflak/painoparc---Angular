import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig {

  constructor(private http: HttpClient) {
    super();
  }

  // tslint:disable-next-line: typedef
  async load() {
    return this.http.get<AppConfig>('app.config.json')
      .toPromise()
      .then(data => {
        this.apiURL = data.apiURL;
        this.assetsURL = data.assetsURL;
      })
      .catch(() => {
        //console.log('Erreur de chargement du fichier de configuration');
      });
  }
}
