import { IUser } from './../../../../core/interfaces/IUser';
import { logging } from 'protractor';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    // TODO Pour test plus rapide, à retirert une fois la méchanique de sauvegarde dans le navigateur mis en place
    this.loginForm.controls['email'].setValue('tanguyj35@gmail.com');
    this.loginForm.controls['password'].setValue('azerty');
  }


  submit(): void {
    this.authSvc.login(this.loginForm.value);
  }

}
