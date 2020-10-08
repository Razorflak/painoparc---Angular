import { MaterialAngularModule } from './../../../material-angular/material-angular.module';
import { ComponentsModule } from './../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const yourRoutes: Routes = [

];

export const yourRouting = RouterModule.forChild(yourRoutes);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    CoreModule,
    MatFormFieldModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
    yourRouting
  ],
  exports: [
  ],
  providers: [
    CookieService
  ]
})
export class PagesModule { }
