import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

  weatherData: any;
  imageLink: any;

  constructor(private _weatherService: WeatherService) {
    this._weatherService.weatherData.subscribe(
      {
        next: ((res: any) => {
          this.weatherData = res;
          this.imageLink = this._weatherService.getWeatherIconsByCode(this.weatherData?.current_observation?.condition?.code)
        }),
        error: (err) => console.log("error", err)
      }
    );
  }

}
