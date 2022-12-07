import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap, tap, of, catchError, distinct, pipe, throwError } from 'rxjs';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { mainCities } from '../../data/main-cities';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  citySearchForm: FormGroup | any;
  searching = false;
  searchFailed = false;
  mainCities = mainCities;
  selectedIndex = -1;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.citySearchForm = new FormGroup({
      cityName: new FormControl('')
    });

    this.selectedItem(mainCities[0]);
  }

  clearInput() {
    this.citySearchForm.patchValue({
      cityName: ''
    })
  }

  /**
   * get the search text from the ngbtypeahead and pass to the weather service to get the cities according to the term
   * typeahead act as a observable
   * when data is not matched, return empty observable
   * @param text$ 
   * 
   */
  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this._weatherService.searchCities(term)),
      tap(() => (this.searching = false, this.searchFailed = false)),
      catchError(error => {
        console.log("Caught search error the wrong way!", error);
        this.searching = false;
        this.searchFailed = true;
        return of([]);
      })
    );
  }

  /**
   * when select the city in ngbtypeahead get the coordinates and get weather data using get weather data api
   * the mainCities filter is get the default cities coordinates and match with the typeahead data, f the result is matched default city will be selected from the list
   * @param item
   */
  selectedItem(item: any) {
    this.clearInput();
    const { latitude } = item.coordinates;
    const { longitude } = item.coordinates;

    this.mainCities.filter((a: any) => {
      if ((a.coordinates.latitude && a.coordinates.longitude) === (item.coordinates.latitude && item.coordinates.longitude)) {
        this.selectedIndex = a.index;
      }
    })

    this._weatherService.getWeatherData(latitude, longitude).subscribe();
  }

  /**
  * Used to format the result data from the lookup into the
  * display and list values. Maps `{name: "band", id:"id" }` into a string
   * @param value 
   * @returns 
   */
  resultFormatBandListValue(value: any) {
    return value.name;
  }

 
  /**
   * Initially binds the string value and then after selecting
   * an item by checking either for string or key/value object.
   * @param value 
   * @returns 
   */
  inputFormatBandListValue(value: any) {
    if (value.name)
      return value.name
    return value;
  }

}
