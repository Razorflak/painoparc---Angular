import { Router } from '@angular/router';
import { SessionService } from './../../../core/services/session.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private authSvc: AuthService,
              private sessionSvc: SessionService,
              private router: Router) { }

  ngOnInit(): void {
    this.sessionSvc.isAuth.subscribe( value => {
      if (value){
        this.router.navigate(['commande']);
      }
    });
  }


  submit(): void {
    this.authSvc.login(this.loginForm.value);
  }

}
