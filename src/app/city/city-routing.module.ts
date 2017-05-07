import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CitydashboardComponent} from './citydashboard/citydashboard.component';
import {CityviewComponent} from './cityview/cityview.component'
const emerRoutes: Routes = [
  {
    path: '', component: CitydashboardComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(emerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CityRouting {
}
