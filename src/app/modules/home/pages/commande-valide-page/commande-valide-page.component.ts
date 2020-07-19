import { SessionService } from './../../../../core/services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-valide-page',
  templateUrl: './commande-valide-page.component.html',
  styleUrls: ['./commande-valide-page.component.scss']
})
export class CommandeValidePageComponent implements OnInit {

  constructor(private sessionSvc: SessionService) { }

  ngOnInit(): void {
    console.log('Totken:');
    console.log(this.sessionSvc.token);
  }

}
