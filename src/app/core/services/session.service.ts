import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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
    if (token !== undefined){
      this.cookieSvr.set('token', token);
    }
    if (userId !== undefined){
      this.userId = userId;
    }
    this.isAuthFlag = auth;
  }
}
