import { IUser } from './../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from 'src/app/config/app-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieSvc: CookieService,
              private httpClient: HttpClient,
              private appConfig: AppConfig) { }

    login(user: IUser): boolean{
      try {
        const url: string = this.appConfig.apiURL + '/auth/login';
        console.log(url);
        const resultHttp: Observable<any> = this.httpClient.post(url, user);
        resultHttp.subscribe(data => {
          console.log('subscribe');
          console.log(data);
          return true;
        },
        err => {
          console.log('erreur');
          console.log(err);
        },
        () => {
          console.log('complete');
        });

      } catch (error) {
        console.log('Erreur: ' + error.message);
        return false;
      }
    }

}
