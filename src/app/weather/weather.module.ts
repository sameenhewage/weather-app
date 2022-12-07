import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { InformationModule } from './information/information.module';
import { SearchModule } from './search/search.module';
import { WeatherRoutingModule } from './weather.routing.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    InformationModule,
    SearchModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
