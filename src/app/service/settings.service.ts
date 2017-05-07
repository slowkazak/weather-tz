import {Injectable} from '@angular/core';
import {COMMON_SETTINGS} from "../settings/common.settings";
@Injectable()
export class SettingsService {

  constructor() {
  }

  /**
   * Возвращает настройку по ключу или все настройки если ключ не указан
   * @param key - имя настройки
   * @returns {any}
   * @constructor
   */
  public Get(key?) {
    return key ? COMMON_SETTINGS[key] || null : COMMON_SETTINGS;
  }

}
