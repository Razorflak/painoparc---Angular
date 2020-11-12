import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-add-page',
  templateUrl: './produit-add-page.component.html',
  styleUrls: ['./produit-add-page.component.scss']
})
export class ProduitAddPageComponent implements OnInit {

  lstPathImg: Array<string>;
  filesToUpload;
  lstPathImgProduit;

  constructor() { }
  produitForm: FormGroup = new FormGroup({
    nom: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    prix: new FormControl('', [
      Validators.required
    ]),
    stock: new FormControl('', [
      Validators.required
    ]),
    isAvailable: new FormControl('', [
      Validators.required
    ]),
    delaiProduction: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  fileChange(event): void{
    this.filesToUpload = event.target.files;
  }

  upload(): void{

  }

  needRefresh(event): void{
  }

}
