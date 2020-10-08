import { AppConfig } from 'src/app/config/app-config';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  _userId: number;
  isAuth: BehaviorSubject<boolean>;
  _token: string;

  constructor(private cookieSvr: CookieService,
              private router: Router,
              private httpClient: HttpClient,
              private appConfig: AppConfig) {
    this.isAuth = new BehaviorSubject<boolean>(false);
    this.isSessionValid();
  }

  isSessionValid(): void {
    const url: string = this.appConfig.apiURL + '/auth/isSessionValid';
    this.httpClient.get<any>(url, {
      headers: this.initHttpOption()
    }).toPromise().then( result => {
      this.setAuth(true, result.userId, result.token);
    }).catch( error => {
      this.router.navigate(['']);
    });
  }


  /**
   * Fonction de sauvegarde des infos de l'utilisateur et mise en cookie du token
   * @param auth est authentifié?
   * @param userId id du user à sauvegarder
   * @param token token du user
   */
  setAuth(auth: boolean, userId?: number, token?: string): void{
    // console.log('id:' + userId + ' token: ' + token);
    if (token !== undefined){
      this.cookieSvr.set('token', token);
      this._token = token;
    }
    if (userId !== undefined){
      this._userId = userId;
    }
    this.isAuth.next(auth);
  }

    /**
     * Fonction de génération du header pour les requête vers l'api
     */
  initHttpOption(isForm: boolean = false): HttpHeaders {
    let token = this.token;
    if (token === undefined){
      token = this.cookieSvr.get('token');
      this._token = token;
    }
    console.log('Bearer ' + this.token);
    let header = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    header = header.append('Authorization', 'Bearer ' + token);
    if (isForm){
      header = header.append('Content-Type', 'application/x-www-form-urlencoded');
    }else{
      header = header.append('Content-Type',  'application/json');
    }
    console.log(header.get('Authorization'));
    const httpOptions = {
      headers: header
    };
    return header;
  }

  get token(): string{
    if (this._token === undefined){
      this._token = this.cookieSvr.get('token');
    }
    return this._token;
  }

  deconnexion(): void{
    this.isAuth.next(false);
    this._token = null;
    this._userId = null;
    this.router.navigate(['/']);
  }

}
