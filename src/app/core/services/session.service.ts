import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookieSvr: CookieService) { }

  userId: number;
  isAuthFlag: boolean;
  token: string;

  isAuth(): boolean {
    return this.isAuthFlag;
  }

  /**
   * Fonction de sauvegarde des infos de l'utilisateur et mise en cookie du token
   * @param auth est authentifié?
   * @param userId id du user à sauvegarder
   * @param token token du user
   */
  setAuth(auth: boolean, userId?: number, token?: string): void{
    console.log('id:' + userId + ' token: ' + token);
    if (token !== undefined){
      this.cookieSvr.set('token', token);
      this.token = token;
    }
    if (userId !== undefined){
      this.userId = userId;
    }
    this.isAuthFlag = auth;
  }

  /**
   * Fonction de génération du header pour les requête vers l'api
   */
  initHttpOption(): HttpHeaders {
    console.log('Bearer ' + this.token);
    let header = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    header = header.append('Authorization', 'Bearer ' + this.token);
    header = header.append("Content-Type", "application/x-www-form-urlencoded");
    console.log(header.get('Authorization'));
    const httpOptions = {
      headers: header
    };
    return header;
}
}
