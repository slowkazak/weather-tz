import {Injectable} from '@angular/core';
import {MESSAGES} from "../settings/msg.settings";
declare var ymaps;

@Injectable()
export class GeocoderService {
  private settings: any = {}

  constructor() {

  }


  Geocode(cityname: string) {
    return new Promise((resolve, reject) => {
      let myGeocoder = ymaps.geocode(cityname);
      myGeocoder.then(
        (res) => {
          try {
            res.metaData.geocoder.found ? resolve(res.geoObjects.get(0).properties.getAll()) : resolve({
              data: {},
              msg: null
            });
          }
          catch (err) {
            reject({data: {}, msg: MESSAGES.networkerror});

          }
        },
        (err) => {
          console.error(err);
          reject({data: {}, msg: MESSAGES.networkerror});

          // обработка ошибки
        }
      );
    });
  }

}
