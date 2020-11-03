import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermDashboardComponent } from './short-term-dashboard.component';

describe('ShortTermDashboardComponent', () => {
  let component: ShortTermDashboardComponent;
  let fixture: ComponentFixture<ShortTermDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
