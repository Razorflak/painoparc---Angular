import { SessionService } from './../../../../core/services/session.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-nav-bar-profil',
  templateUrl: './nav-bar-profil.component.html',
  styleUrls: ['./nav-bar-profil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarProfilComponent implements OnInit {


  constructor(private router: Router,
              private sessionSvc: SessionService) {

  }
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();

  colapse: boolean;
  userTabBord: Array<any> = new Array(
    {libelle: 'Tableau de bord', path: '/profil/tableau_bord'}
  );
  userMenuArray: Array<any> = new Array(
    {libelle: 'Profil', path: '/profil/profil'},
    {libelle: 'Mes commandes', path: '/profil/mes_commandes'},
    {libelle: 'Favoris', path: '/profil/mes_favoris'},
  );
  commerceManagerMenuArray: Array<any> = new Array(
    {libelle: 'Mon commerces', path: '/commerce/'},
    {libelle: 'Mes produits', path: '/commerce/produits', active: true},
    {libelle: 'Toto', path: '/commerce/produits'},
  );
  campingManagerMenuArray: Array<any> = new Array();

  arrayMenu: Array<any> = new Array();
  activeLibelle: string;

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnInit(): void {
    this.arrayMenu.push(this.userTabBord);
    this.arrayMenu.push(this.userMenuArray);
    this.arrayMenu.push(this.commerceManagerMenuArray);
    this.setMenuPathActive();

    // Subscription au changement de route de l'application pour mettre le menu sélectionné en actif
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.setMenuPathActive(e.url);
    });
  }

  onClickMenu(path): void{
    console.log(path);
  }

  setMenuPathActive(path = null): void{
    if ( path === null){
      path = this.router.url;
    }
    this.arrayMenu.forEach(cat => {
      cat.forEach(menu => {
          menu.active = menu.path === path;
          if (menu.path === this.router.url){
            this.activeLibelle = menu.libelle;
          }
      });
    });
  }



  onClickHeader(): void{
    this.colapse = !this.colapse;
  }

  onClickDeconnexion(): void {
    this.sessionSvc.deconnexion();
  }
}
