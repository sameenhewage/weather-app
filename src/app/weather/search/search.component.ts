import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  weatherData$: Observable<any>

  constructor(private _weatherService: WeatherService) {
    this.weatherData$ = _weatherService.weatherData
  }

}
