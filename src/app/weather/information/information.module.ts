import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { FutureForecastComponent } from './future-forecast/future-forecast.component';



@NgModule({
  declarations: [
    InformationComponent,
    CurrentForecastComponent,
    FutureForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformationComponent,
    CurrentForecastComponent,
    FutureForecastComponent
  ]
})
export class InformationModule { }
