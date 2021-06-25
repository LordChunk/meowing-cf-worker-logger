import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StatisticsService } from 'src/services/api/services';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    const statisticsServiceStub = () => ({
      statisticsRequestsPerCountryGet: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      statisticsRequestsPerUrlGet: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [
        { provide: StatisticsService, useFactory: statisticsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`PieChartInput has default value`, () => {
    expect(component.PieChartInput).toEqual([]);
  });

  it(`TreemapChartInput has default value`, () => {
    expect(component.TreemapChartInput).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const statisticsServiceStub: StatisticsService = fixture.debugElement.injector.get(
        StatisticsService
      );
      spyOn(
        statisticsServiceStub,
        'statisticsRequestsPerCountryGet'
      ).and.callThrough();
      spyOn(
        statisticsServiceStub,
        'statisticsRequestsPerUrlGet'
      ).and.callThrough();
      component.ngOnInit();
      expect(
        statisticsServiceStub.statisticsRequestsPerCountryGet
      ).toHaveBeenCalled();
      expect(
        statisticsServiceStub.statisticsRequestsPerUrlGet
      ).toHaveBeenCalled();
    });
  });
});
