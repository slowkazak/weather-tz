import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ApiService} from "./api.service";

@Injectable()
export class CityserviceService {
  cityadd: Subject<Array<number>> = new Subject();


  constructor(private apiservice: ApiService) {
  }

  private _subscription = this.cityadd.subscribe(
    (res) => {
      console.log('onNext: ', res);
      this.apiservice.GetCityByCoords(res[0], res[1]).then(res => {
        console.log(res)
      })
    },
    (err) => {
      console.log('onError: ', err.message);
    },
    () => {
      console.log('onCompleted');
    });

}
