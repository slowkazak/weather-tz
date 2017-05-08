/**
 * openweathermap отдает время в timestamp Pipe для перевода в понятный формат даты из timestamp
 */
import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'unixtoDate'
})
export class UnixtoDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment.unix(value).format('DD.MM.YYYY');

  }

}
