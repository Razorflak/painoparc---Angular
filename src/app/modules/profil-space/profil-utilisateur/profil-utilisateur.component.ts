import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.scss']
})
export class ProfilUtilisateurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit(element): void{
    switch (element){
      case 'email':
        break;
      case 'password':
        break;
      case 'name':
        break;
      case 'birthday':
        break;
    }
  }

}
