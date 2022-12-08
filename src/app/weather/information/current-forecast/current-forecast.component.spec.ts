import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { weatherData } from '../../mockdata/mockdata';
import { WeatherService } from '../../services/weather.service';
import { CurrentForecastComponent } from './current-forecast.component';

fdescribe('CurrentForecastComponent', () => {
  let component: CurrentForecastComponent;
  let fixture: ComponentFixture<CurrentForecastComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentForecastComponent],
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentForecastComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    component.weatherData = weatherData;
    //weatherService.setWeatherData(result);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show New York when click New York city', () => {
    let cityName = fixture.debugElement.query(By.css(".city-name")).nativeElement.innerText;
    expect(cityName).toEqual(weatherData.location.city)
  });

});
