/**
 * Корневые настройки роутера (lazy-loading)
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CitydashboardComponent} from '../city/citydashboard/citydashboard.component';

const appRoutes: Routes = [

  {path: '', loadChildren: 'app/city/city.module#CityModule'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
