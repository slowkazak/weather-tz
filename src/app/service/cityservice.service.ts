import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ApiService} from './api.service';
import {CityWeather} from '../interface/city';
import  * as _ from 'lodash';

@Injectable()
export class CityserviceService {
  /**
   * Subject который принимает на вхд координаты и название города
   * @type {Subject}
   */
  cityadd: Subject<any> = new Subject();
  citylist: Array<CityWeather> = []

  constructor(private apiservice: ApiService) {
  }

  /**
   * Подписка на subject - при наличии результатов поиска прогноза - помещает в массив с городами текущий город, если город
   * есть, обновляет прогноз
   * @type {Subscription}
   * @private
   */
  private _subscription = this.cityadd.subscribe(
    (x) => {

      this.apiservice.GetCityByCoords(x.coords[0], x.coords[1]).then((res: any) => {
        _.has(res, 'data') && res.data.length ? (
          res.data = res.data.pop(),
            _.findIndex(this.citylist, {'id': res.data.id}) < 0 ?
              this.citylist.push({
                id: res.data.id,
                cityname: x.name,
                sunset: res.data.sys.sunset,
                sunrise: res.data.sys.sunrise,
                weathericon: res.data.weather[0].icon,
                windspeed: res.data.wind.speed,
                humidity: res.data.main.humidity,
                temp: res.data.main.temp,
                dt: res.data.dt
              }) : false
        ) :
          false;
        console.log(res);
      }).catch(err => console.error(err));
    },
    (err) => {
      console.log('onError: ', err.message);
    },
    () => {
      console.log('onCompleted');
    });

}


// ata
//   :
//   Array(1)
// 0
// :
// Object
// base
//   :
//   "stations"
// clouds
//   :
//   Object
// all
//   :
//   75
// __proto__
//   :
//   Object
// cod
//   :
//   200
// coord
//   :
//   Object
// dt
//   :
//   1494228600
// id
//   :
//   1496889
// main
//   :
//   Object
// name
//   :
//   "Novoomskiy"
// sys
//   :
//   Object
// country
//   :
//   "RU"
// id
//   :
//   7289
// message
//   :
//   0.0464
// sunrise
//   :
//   1494198802
// sunset
//   :
//   1494255361
// type
//   :
//   1
// __proto__
//   :
//   Object
// visibility
//   :
//   10000
// weather
//   :
//   Array(1)
// 0
// :
// Object
// description
//   :
//   "broken clouds"
// icon
//   :
//   "04d"
// id
//   :
//   803
// main
//   :
//   "Clouds"
// __proto__
//   :
//   Object
// length
//   :
//   1
// __proto__
//   :
//   Array(0)
// wind
//   :
//   Object
// deg
//   :
//   300
// gust
//   :
//   13
// speed
//   :
//   8
