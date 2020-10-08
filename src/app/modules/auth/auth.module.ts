import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialAngularModule } from './../../material-angular/material-angular.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register'
    , component: RegisterPageComponent
  }
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialAngularModule,
    routing,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
