import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent {

  @Input() weatherData: any = [];
  @Input() imageLink: any = [];

}
