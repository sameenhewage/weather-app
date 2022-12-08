import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { iWeatherData } from 'src/app/weather/models/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private citiesBaseUrl = 'https://spott.p.rapidapi.com/places/autocomplete';
  private weatherBaseUrl = 'https://yahoo-weather5.p.rapidapi.com/weather';

  private httpOptions_Cities = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': environment.X_RapidAPI_Key,
      'X-RapidAPI-Host': environment.X_RapidAPI_Host_Cities
    }),
  };

  private httpOptions_Weather = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': environment.X_RapidAPI_Key,
      'X-RapidAPI-Host': environment.X_RapidAPI_Host_Weather
    })
  };

  constructor(private http: HttpClient) { }

  getCitiesBySearchQuery(searchQuery: string) {
    if (searchQuery === '') {
      return of([]);
    }
    const url = `${this.citiesBaseUrl}`;
    let params = new HttpParams(
      {
        fromObject: {
          limit: 10,
          skip: 0,
          type: 'CITY',
          q: searchQuery
        }
      }
    );
    return this.http.get<[any, string[]]>(url, { ...this.httpOptions_Cities, params: params });
  }

  getWeatherBySelectedCity(lat: number, lon: number) {
    const url = `${this.weatherBaseUrl}`;
    let params = new HttpParams(
      {
        fromObject: {
          lat: lat,
          long: lon,
          format: 'json',
          u: 'c'
        }
      }
    );
    return this.http.get<iWeatherData>(url, { ...this.httpOptions_Weather, params: params });
  }
}