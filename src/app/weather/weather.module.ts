import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { InformationModule } from './information/information.module';
import { SearchModule } from './search/search.module';
import { WeatherRoutingModule } from './weather.routing.module';
import { WeatherService } from './services/weather.service';
import { WeatherApiService } from 'src/services/weather-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    InformationModule,
    SearchModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherService,
    WeatherApiService
  ]
})
export class WeatherModule { }
