import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.weatherData.subscribe(
      {
        next: ((res: any) => {
          this.weatherData = res;
        }),
        error: (err) => console.log("error", err),
        complete: () => console.log("Complete")
      }
    )
  }
  
  /**
   * get application background images using weather condition
   * return class name of the background
   */
  getAppBackGround() {
    let className = '';
    if (this.weatherData?.current_observation) {
      if (
        this.weatherData?.current_observation?.condition?.code === 27 ||
        this.weatherData?.current_observation?.condition?.code === 29 ||
        this.weatherData?.current_observation?.condition?.code === 33 ||
        this.weatherData?.current_observation?.condition?.code === 31
      ) {
        className = 'cloudy-background-night'
      }

      else if (
        this.weatherData?.current_observation?.condition?.code === 28 ||
        this.weatherData?.current_observation?.condition?.code === 30 ||
        this.weatherData?.current_observation?.condition?.code === 34
      ) {
        className = 'cloudy-background-day'
      }
      else if (
        this.weatherData?.current_observation?.condition?.code === 10 ||
        this.weatherData?.current_observation?.condition?.code === 11 ||
        this.weatherData?.current_observation?.condition?.code === 12 ||
        this.weatherData?.current_observation?.condition?.code === 40 ||
        this.weatherData?.current_observation?.condition?.code === 42 ||
        this.weatherData?.current_observation?.condition?.code === 45 ||
        this.weatherData?.current_observation?.condition?.code === 47
      ) {
        className = 'rain-background'
      }
      else if (
        this.weatherData?.current_observation?.condition?.code === 21
      ) {
        className = 'haze-background'
      }
      else {
        className = 'default-background'
      }
    }
    return className;
  }

}
