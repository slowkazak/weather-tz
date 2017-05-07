import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Callback} from "../class/callback.static";
import {SettingsService} from "./settings.service";
import {promise} from "selenium-webdriver";
@Injectable()
export class ApiService {

  constructor(private http: Http, private settingsService: SettingsService) {
  }

  GetCityByCoords(lan, lat) {
    let apisettings: any = this.settingsService.Get();
    console.log(apisettings.owmapapilatparam)
    let urlSearch = new URLSearchParams();
    urlSearch.append(apisettings.owmapapiappidparam, apisettings.owmapapikey);
    urlSearch.append(apisettings.owmapapilatparam, lan);
    urlSearch.append(apisettings.owmapapilongparam, lat);
    let result = Promise.resolve({});
    try {
      result = this.http.get(apisettings.owmapapiproto + apisettings.owmapapiaddr, {search: urlSearch}).toPromise().then(res => Callback.Success(res)).catch(err => Callback.Error(err));
    }
    catch (err) {
      result = Promise.reject({data: [], msg: '111'});
    }
    return result;
  }


}
