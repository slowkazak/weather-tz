import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CitydashboardComponent} from './citydashboard/citydashboard.component';
import {CityviewComponent} from './cityview/cityview.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CityRouting} from './city-routing.module';
import {KtoCPipe} from '../pipe/k-to-c.pipe';

import { UnixtoDatePipe } from '../pipe/unixto-date.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CityRouting,
    ReactiveFormsModule
  ],
  declarations: [
    KtoCPipe,
    UnixtoDatePipe,
    CitydashboardComponent,
    CityviewComponent
  ],
  exports: [CitydashboardComponent, CityviewComponent],
  providers: []
})
export class CityModule {
}
