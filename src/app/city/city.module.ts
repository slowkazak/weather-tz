import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CitydashboardComponent} from './citydashboard/citydashboard.component';
import {CityviewComponent} from './cityview/cityview.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CityRouting} from './city-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CityRouting,
    ReactiveFormsModule
  ],
  declarations: [CitydashboardComponent, CityviewComponent
  ],
  exports: [CitydashboardComponent, CityviewComponent],
  providers: []
})
export class CityModule {
}
