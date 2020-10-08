import { FormsModule } from '@angular/forms';
import { CommandeModule } from './modules/commande/commande.module';
import { JsonAppConfigService } from './config/json-app-config.service';
import { PagesModule } from './modules/home/pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppConfig } from './config/app-config';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// tslint:disable-next-line: typedef
export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'fr'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
