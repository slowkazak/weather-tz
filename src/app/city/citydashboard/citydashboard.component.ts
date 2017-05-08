import {Component, OnInit} from '@angular/core';
import {CityserviceService} from "../../service/cityservice.service";
import {CityWeather} from "../../interface/city";
import {Router} from "@angular/router";

@Component({
  selector: 'app-citydashboard',
  templateUrl: './citydashboard.component.html',
  styleUrls: ['./citydashboard.component.css']
})
export class CitydashboardComponent implements OnInit {
  private weather: Array<CityWeather> = [];

  constructor(private  cityservice: CityserviceService, private router: Router) {
  }

  ngOnInit() {
    this.weather = this.cityservice.citylist;
  }

  /**
   * Получение id города и передача в роутер
   * @param id
   * @private
   */
  private _ShowCity(id: number) {
    this.router.navigate(['/city', id]);
  }

}
