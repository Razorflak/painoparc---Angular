import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/config/app-config';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterPageComponent } from 'src/app/modules/home/pages/register-page/register-page.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterSvcService {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private sessionSvc: SessionService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  register(user): void{
    const url: string = this.appConfig.apiURL + '/auth/register';
    console.log(url);
    const resultHttp: Observable<any> = this.httpClient.post(url, user);
    resultHttp.subscribe(data => {
      console.log('OK!');
      this.snackBar.open('Compte créé avec succès', '', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-primary']

      }).afterDismissed().subscribe( () => {
        this.router.navigate(['']);
      });
  },
    err => {
      // Remonté de l'erreur à l'écran pour gestion (500,401)
      console.log('errir!');
      throw err;
    },
    () => {
      console.log('complet!');
    });
  }


}
