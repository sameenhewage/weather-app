import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TodayForecastComponent } from './today-forecast/today-forecast.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    TodayForecastComponent
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SearchComponent,
    SearchInputComponent,
    TodayForecastComponent
  ]
})
export class SearchModule { }
