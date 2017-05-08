/**
 * Интерфейс объекта описывабщего город, используется только как пользовательский формат данных
 */
export interface CityWeather {
  cityname: string;
  windspeed: number;
  sunrise: number;
  sunset: number;
  weathericon: string;
  id: number;
  humidity: number;
  temp: number;
  dt: number;
}
