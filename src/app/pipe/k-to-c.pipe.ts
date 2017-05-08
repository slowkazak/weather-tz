/**
 * openweathermap отдает температуру в кельвинах, ну публичном апи параметр отвечающий за отображение в цельсиях
 * не всегда работает правильно. Pipe для перевода в цельсии из кельвинов
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'KtoC'
})
export class KtoCPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value - 273.15).toFixed(1);
    // return null;

  }

}
