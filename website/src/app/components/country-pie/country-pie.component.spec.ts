import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPieComponent } from './country-pie.component';

describe('CountryPieComponent', () => {
  let component: CountryPieComponent;
  let fixture: ComponentFixture<CountryPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
