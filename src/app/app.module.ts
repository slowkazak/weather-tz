import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SettingsService} from './service/settings.service';

import {GeocoderService} from "./service/geocoder.service";
import {CityaddComponent} from './cityadd/cityadd.component';
import {AppRoutingModule} from "./app-router/app.routing.module";
import {CityserviceService} from "./service/cityservice.service";
import {ApiService} from "./service/api.service";

@NgModule({
  declarations: [
    AppComponent,
    CityaddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SettingsService, GeocoderService, CityserviceService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
