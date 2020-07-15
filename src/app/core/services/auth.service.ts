import { SessionService } from './session.service';
import { IUser } from './../interfaces/IUser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from 'src/app/config/app-config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private authSvc: SessionService,
              private router: Router) { }

    /**
     * Fonction de login.
     * Peut émettre une erreur de type HttpErrorResponse à catch
     * (principalement 401 si les info sont invalide et 500 en cas d'erreur serveur)
     * @param user info du user {email, password}
     */
    login(user): void{
        const url: string = this.appConfig.apiURL + '/auth/login';
        console.log(url);
        const resultHttp: Observable<any> = this.httpClient.post(url, user);
        resultHttp.subscribe(data => {
          // Sauvegarde de la session
          this.authSvc.setAuth(true, data.user.id, data.token);
          // Navigation vers la page de Commande
          // TODO sera sans doute à modifier une fois la page d'accueil faite
          this.router.navigate(['/commander']);

        },
        err => {
          // Remonté de l'erreur à l'écran pour gestion (500,401)
          throw err;
        },
        () => {
        });
    }

}
