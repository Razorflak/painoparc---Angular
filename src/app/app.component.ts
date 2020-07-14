import { Component } from '@angular/core';
import { AppConfig } from './config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'painoparc';
  constructor(private appConfig: AppConfig){
    this.title = 'TOTO';
    console.log(appConfig.apiURL);
  }
}
