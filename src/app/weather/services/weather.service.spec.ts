import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherApiService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});