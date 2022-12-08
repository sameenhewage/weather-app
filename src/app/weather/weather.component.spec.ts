import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { weatherData } from './mockdata/mockdata';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    weatherService.setWeatherData(weatherData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive weather data on oninit ', () => {
    expect(component.weatherData).toEqual(jasmine.objectContaining(weatherData));
  });

  it('should show cloudy-background-night class when code = 33', () => {
    const className = component.getAppBackGround();
    expect(className).toBe('cloudy-background-night');
  });

  it('should failed when code = 33', () => {
    const className = component.getAppBackGround();
    expect(className).toBe('cloudy-background-night');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
