import { Router } from '@angular/router';
import { ICommerce } from './../../../../core/interfaces/ICommerce';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commerce-commande-card',
  templateUrl: './commerce-commande-card.component.html',
  styleUrls: ['./commerce-commande-card.component.scss']
})
export class CommerceCommandeCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() commerce: ICommerce;

  ngOnInit(): void {
  }

  get concatActiviteCommerce(): string{
    let result = '';
    this.commerce.Themes.forEach( theme => {
      result += theme.nom + ' - ';
    });
    // result += 'aaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    return result.substr(0, result.length - 2);
  }

  onClickVoirProduit(): void{
    this.router.navigate(['/produit_commerce/' + this.commerce.id]);
  }

}
