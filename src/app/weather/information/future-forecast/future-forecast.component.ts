import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-future-forecast',
  templateUrl: './future-forecast.component.html',
  styleUrls: ['./future-forecast.component.scss']
})
export class FutureForecastComponent {

  @Input() futureWeatherData: any = [];

  constructor(private _weatherService: WeatherService) { }

  /**
   * pass the weather code to the weather service and get matching image link 
   * @param imageCode 
   * @returns image link
   */
  getImageLink(imageCode: number) {
    return this._weatherService.getWeatherIconsByCode(imageCode);
  }

}
