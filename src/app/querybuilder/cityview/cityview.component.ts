import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityserviceService} from '../../service/cityservice.service';
import * as _ from 'lodash';
import {SettingsService} from "../../service/settings.service";
@Component({
  selector: 'app-cityview',
  templateUrl: './cityview.component.html',
  styleUrls: ['./cityview.component.css']
})
export class CityviewComponent implements OnInit, AfterContentInit {
  private cityweather = {};
  private imgsettings: any = {}

  constructor(private acrivatedroute: ActivatedRoute,
              private settingsService: SettingsService,
              private cityservice: CityserviceService) {
  }

  /**
   * При проверке контента получение настроек для отображения иконки погоды
   */
  ngAfterContentInit() {
    this.imgsettings = {
      owmapimgaddr: this.settingsService.Get('owmapimgaddr'),
      owmapimgext: this.settingsService.Get('owmapimgext')
    };
  }

  /**
   * При загрузке компонента - получение id из роутера
    */
  ngOnInit() {
  this.acrivatedroute.params.subscribe(params => {
      _.has(params, 'id') ? this.GetCityData(params.id) : false;
    });
  }

  /**
   * Поиск города в массиве
   * @param id
   * @constructor
   */
  private GetCityData(id: string) {
    let result: any = null;
    result = _.filter(this.cityservice.citylist, {id: parseInt(id, 10)});
    result.length ? this.cityweather = result.pop() : false;

  }

}
