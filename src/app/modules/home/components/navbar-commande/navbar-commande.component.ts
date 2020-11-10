import { Router } from '@angular/router';
import { ICommerce } from './../../../../core/interfaces/ICommerce';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-commande',
  templateUrl: './navbar-commande.component.html',
  styleUrls: ['./navbar-commande.component.scss']
})
export class NavbarCommandeComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() commerce: ICommerce;
  displayCommerceNom: boolean;

  ngOnInit(): void {
  }

  onClickBackToCommerce(): void{
    this.router.navigate(['/commande']);

  }

}
