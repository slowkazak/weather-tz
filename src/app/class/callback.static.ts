import {MESSAGES, networkErrors} from '../settings/msg.settings';
import * as _ from 'lodash';
export class Callback {
  /**
   * Коллбек апипровайдера для успешновыполненных запросов
   * @param data - данные из запроса
   * @constructor
   */
  public static Success(data: any) {
    const result: Array<any> = [];
    let msg: string = '';
    try {
      data = data.json();
      _.has(data, 'length') ? result.push(...data) : result.push(data);
    }
    catch (err) {
      msg = MESSAGES.callbackoperationerr;
      console.error(msg, err);
    }
    return {data: result, msg: msg};
  }

  /**
   *  Коллбек апипровайдера для неуспешно выполненных запросов
   * @param data - тело ошибки
   * @constructor
   */
  public static Error(data) {
    const msg = networkErrors[data.status];
    console.error(MESSAGES.networkerror, msg, data);
    return {data: [], msg: msg};

  }
}
