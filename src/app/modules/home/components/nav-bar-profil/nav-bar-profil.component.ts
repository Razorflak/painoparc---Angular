import { SessionService } from './../../../../core/services/session.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
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
              private sessionSvc: SessionService,
              private cd: ChangeDetectorRef) {

  }

  headerOpen: boolean;
  userTabBord: Array<any> = new Array(
    {libelle: 'Tableau de bord', path: '/profil/tableau_bord'}
  );
  userMenuArray: Array<any> = new Array(
    {libelle: 'Profil', path: '/profil/profil'},
    {libelle: 'Mes commandes', path: '/profil/mes_commandes'},
    {libelle: 'Favoris', path: '/profil/mes_favoris'},
  );
  commerceManagerMenuArray: Array<any> = new Array(
    {libelle: 'Mon commerces', path: '/commerce'},
    {libelle: 'Mes produits', path: '/commerce/produits'}
  );
  campingManagerMenuArray: Array<any> = new Array();

  arrayMenu: Array<any> = new Array();
  activeLibelle: string;
  // gestion du scroll pour fermer le menu
  transitionEnCours = false;
  lastScrollTop = 0;

  ngOnInit(): void {
    // Tableau de bord pour une futur évolution
    // this.arrayMenu.push(this.userTabBord);
    this.arrayMenu.push(this.userMenuArray);
    this.arrayMenu.push(this.commerceManagerMenuArray);
    this.setMenuPathActive();

    // Subscription au changement de route de l'application pour mettre le menu sélectionné en actif
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.setMenuPathActive(e.url);
      this.headerOpen = false;
    });
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    const st = event.srcElement.scrollTop;
    if ( this.lastScrollTop < st && !this.transitionEnCours){
      this.lastScrollTop = st;
      this.headerOpen = false;
      this.cd.detectChanges();
    }
    this.lastScrollTop = st;
  }

  onTransitionStart(): void{
    this.transitionEnCours = true;
  }

  onTransitionEnd(): void{
    this.transitionEnCours = false;
    this.lastScrollTop = 99999999;
  }

  onClickHeader(): void{
    this.headerOpen = !this.headerOpen;
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





  onClickDeconnexion(): void {
    this.sessionSvc.deconnexion();
  }
}
