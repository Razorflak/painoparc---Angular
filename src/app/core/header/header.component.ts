import { Router } from '@angular/router';
import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  constructor(private sessionSvc: SessionService,
              private router: Router) { }

  ngOnInit(): void {
    this.sessionSvc.isAuth.subscribe(value => {
      this.isAuth = value;
    });
  }

  onClickLogo(): void{
    this.router.navigate(['']);
  }

  switchRouter(action): void{
    switch (action){
      case 'profil':
        this.router.navigate(['/profil']);
        break;
      case 'historique':
        this.router.navigate(['/profil/mes_commandes']);
        break;
      case 'favoris':
        this.router.navigate(['/favoriCommande']);
        break;
      case 'deconnexion':
        this.sessionSvc.deconnexion();
        break;
      case 'connexion':
        this.router.navigate(['']);
        break;
    }
  }

}
