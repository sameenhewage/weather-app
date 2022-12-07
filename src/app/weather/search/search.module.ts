import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TodayForecastComponent } from './today-forecast/today-forecast.component';



@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    TodayForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    SearchInputComponent,
    TodayForecastComponent
  ]
})
export class SearchModule { }
