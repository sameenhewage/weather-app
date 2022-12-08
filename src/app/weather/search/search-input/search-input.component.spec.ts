import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { cities } from '../../mockdata/mockdata';

import { SearchInputComponent } from './search-input.component';

fdescribe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let httpTestingController: HttpTestingController;
  let baseUrl = "https://spott.p.rapidapi.com/places/autocomplete";
  let Colombo = "Colombo";
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [NgbModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show searching text while typing typehead', fakeAsync(() => {
    const text = new Subject<string>();
    component.search(text.asObservable()).subscribe();
    text.next(Colombo);
    tick(400);
    fixture.detectChanges();
    expect(component.searching).toBeTruthy();
  }));

  it('should hide searching text after data loaded', fakeAsync(() => {
    const text = new Subject<string>();
    component.search(text.asObservable()).subscribe();
    text.next(Colombo);
    tick(400);
    fixture.detectChanges();
    let testRequest = httpTestingController.expectOne(baseUrl + '?limit=10&skip=0&type=CITY&q=' + Colombo);
    testRequest.flush(cities);
    expect(component.searching).toBeFalsy();
  }));

});
