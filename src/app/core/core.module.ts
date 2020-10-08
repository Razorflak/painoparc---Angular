import { MaterialAngularModule } from './../material-angular/material-angular.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MaterialAngularModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
