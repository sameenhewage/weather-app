import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { WeatherApiService } from 'src/services/weather-api.service';
import { iWeatherData } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private _weatherApiService: WeatherApiService) { }

  public weatherData = new BehaviorSubject<iWeatherData>({} as iWeatherData);

  /**
   * set weather data to use after fletch the data as observable
   * @param data 
   */
  setWeatherData(data: any) {
    this.weatherData.next(data);
  }

  /**
   * get weather data using coordinates
   * this will call outside api service file to call and get the weather data
   * @param latitude 
   * @param longitude 
   * @returns observable weather data
   */
  getWeatherData(latitude: number, longitude: number) {
    return this._weatherApiService.getWeatherBySelectedCity(latitude, longitude).pipe(
      tap((weatherData: any) => this.weatherData.next(weatherData))
    )
  }

  /**
   * search cities using term
   * this will call outside api service file to call and get the city data
   * @param term 
   * @returns observable city data
   */
  searchCities(term: string) {
    return this._weatherApiService.getCitiesBySearchQuery(term);
  }

  /**
   * weather data has weather code, according to weather codes this will return the weather icon
   * @param imageCode 
   * @returns imageLink
   */
  getWeatherIconsByCode(imageCode: number) {
    let code = imageCode;
    let imageLink = '';
    switch (code) {
      case 0:
        imageLink = '/assets/weather-icons/tornado.svg';
        break;

      case 1:
      case 2:
        imageLink = '/assets/weather-icons/hurricane.svg';
        break;

      case 3:
      case 4:
      case 37:
      case 38:
      case 39:
        imageLink = '/assets/weather-icons/thunderstorms.svg';
        break;

      case 5:
      case 6:
      case 7:
      case 18:
        imageLink = '/assets/weather-icons/sleet.svg';
        break;

      case 8:
      case 9:
      case 35:
        imageLink = '/assets/weather-icons/drizzle.svg';
        break;

      case 10:
        imageLink = '/assets/weather-icons/rain.svg';
        break;

      case 11:
      case 12:
      case 40:
      case 42:
        imageLink = '/assets/weather-icons/showers.svg';
        break;

      case 13:
      case 14:
      case 15:
      case 16:
      case 41:
      case 43:
      case 46:
        imageLink = '/assets/weather-icons/snow.svg';
        break;

      case 17:
        imageLink = '/assets/weather-icons/hail.svg';
        break;

      case 19:
        imageLink = '/assets/weather-icons/dust.svg';
        break;

      case 20:
        imageLink = '/assets/weather-icons/fog.svg';
        break;

      case 21:
        imageLink = '/assets/weather-icons/haze.svg';
        break;

      case 22:
        imageLink = '/assets/weather-icons/smoke.svg';
        break;

      case 23:
        imageLink = '/assets/weather-icons/blustery.svg';
        break;

      case 24:
        imageLink = '/assets/weather-icons/wind.svg';
        break;

      case 25:
        imageLink = '/assets/weather-icons/thermometer-colder.svg';
        break;

      case 26:
      case 44:
        imageLink = '/assets/weather-icons/cloudy.svg';
        break;

      case 27:
      case 29:
      case 33:
        imageLink = '/assets/weather-icons/partly-cloudy-night.svg';
        break;

      case 28:
      case 30:
      case 34:
        imageLink = '/assets/weather-icons/partly-cloudy-day.svg';
        break;

      case 31:
        imageLink = '/assets/weather-icons/clear-night.svg';
        break;

      case 32:
        imageLink = '/assets/weather-icons/sunny.svg';
        break;

      case 36:
        imageLink = '/assets/weather-icons/thermometer.svg';
        break;

      case 45:
      case 47:
        imageLink = '/assets/weather-icons/thunderstorms-rain.svg';
        break;


      default:
        imageLink = '/assets/weather-icons/not-available.svg';
        break;
    }
    return imageLink;
  }

}
