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

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }


  submit(): void {
    console.log ('onSubmit');
    const user: IUser = {
      email: 'tanguyj35@gmail.com',
      password: 'azerty',
      firstName: 'Julien',
      id: 0,
      isAdmin: 1,
      lastName: 'TANGUY'
    };
    const test = this.authSvc.login(user);
    console.log('test: ' + test);
  }

}
