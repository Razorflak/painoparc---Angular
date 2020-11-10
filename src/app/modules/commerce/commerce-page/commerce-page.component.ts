import { AppConfig } from 'src/app/config/app-config';
import { HttpClient } from '@angular/common/http';
import { ICommerce } from './../../../core/interfaces/ICommerce';
import { CommerceService } from './../../../core/services/commerce.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commerce-page',
  templateUrl: './commerce-page.component.html',
  styleUrls: ['./commerce-page.component.scss']
})
export class CommercePageComponent implements OnInit {

  constructor(private commerceSvc: CommerceService,
              private http: HttpClient,
              private appConfig: AppConfig,
              private cd: ChangeDetectorRef) { }

  commerceForm: FormGroup = new FormGroup({
    nomCommerce: new FormControl('', [
      Validators.required
    ]),
// Voir pour mettre une saisie multiple d'emai au cas ou le commercant souhaite que plusieurs adresse recoivent les commande et demandes...
    emailCommande: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    description: new FormControl('', [
    ]),
    // Adresse
    numeroVoie: new FormControl('', [
      Validators.required
    ]),
    libelleVoie: new FormControl('', [
      Validators.required
    ]),
    BP: new FormControl('', [
    ]),
    codePostal: new FormControl('', [
      Validators.required
    ]),
    commune: new FormControl('', [
      Validators.required
    ]),
    pays: new FormControl('', [
      Validators.required
    ]),
  });

  // Upload d'image
  filesToUpload: Array<File> = [];
  commerce: ICommerce;
  lstPathImgCommerce: Array<string>;

  ngOnInit(): void {
    this.commerceSvc.loadHttpLstCommerceUser().then(result  => {
      this.commerce = result[0];
      this.commerceForm.controls.nomCommerce.setValue(this.commerce.nomCommerce);
      this.commerceForm.controls.description.setValue(this.commerce.description);
      this.commerceForm.controls.emailCommande.setValue(this.commerce.emailCommande);
      this.commerceForm.controls.numeroVoie.setValue(this.commerce.numeroVoie);
      this.commerceForm.controls.libelleVoie.setValue(this.commerce.libelleVoie);
      this.commerceForm.controls.BP.setValue(this.commerce.BP);
      this.commerceForm.controls.codePostal.setValue(this.commerce.codePostal);
      this.commerceForm.controls.commune.setValue(this.commerce.commune);
      this.commerceForm.controls.pays.setValue(this.commerce.pays);

      // Chargement des images du commerce
      // Fait ici car faut bien que le commerce soir chargé !
      this.getLstImageCommerce();

    });

  }

  onSubmit(): void {
    if (this.commerceForm.invalid){
      return;
    }
  }

  fileChange(event): void{
    this.filesToUpload = event.target.files;
  }

  upload(): void {
    const files: Array<File> = this.filesToUpload;
    this.commerceSvc.uploadImgCommerce(this.filesToUpload, this.commerce.id).subscribe(result => {
      this.lstPathImgCommerce = (result.filesCommerce as Array<string>).map(file => this.appConfig.assetsURL + `/img/commerce/${this.commerce.id}/${file}`);
      this.lstPathImgCommerce.sort(); // le main va se trouver à la fin;
      this.lstPathImgCommerce.reverse();
    });
  }

  getLstImageCommerce(): void{
    this.commerceSvc.getLstImageByCommerce(this.commerce.id.toString()).then( result => {
      this.lstPathImgCommerce = new Array();
      result.forEach(fileName => {
        let fullPath = this.appConfig.assetsURL + `/img/commerce/${this.commerce.id}/${fileName}`;
        if (fileName.indexOf('main') === 0){
          fullPath += `?dummy=${Date.now()}`;
        }
        this.lstPathImgCommerce.push(fullPath);
      });
      // Sort pour mettre toujours le main.jpg en premier
      this.lstPathImgCommerce.sort(); // le main va se trouver à la fin;
      this.lstPathImgCommerce.reverse();
    });
  }

  needRefresh(event): void{
    this.getLstImageCommerce();
    this.cd.detectChanges();
  }

}
