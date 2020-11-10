import { RegisterSvcService } from './../../../core/services/register-svc.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    isCommercant: new FormControl(''),
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    bio: new FormControl(''),
    emplacement: new FormControl('', [
      Validators.required
    ])
  });



  constructor(private registerSvc: RegisterSvcService) { }


  ngOnInit(): void {
  }

  /**
   * Règle de gestion à mettre en place:
   * Définir les champs obligatoires
   * Niveau de sécurité du mot de passe
   * Confirmation du mot de passe
   * Message pour prévenir que les comptes commercant sont soumis à une validation manuel par administrateur
   */


  submit(): void{
    if (this.userForm.invalid){
      return;
    }

    const userInfo = {
      user: {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        isCommercant: this.userForm.value.isCommercant
      },
      userInformation: {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        emplacement: this.userForm.value.emplacement,
        bio: this.userForm.value.bio
      }
    };
    this.registerSvc.register(userInfo);
  }


}
