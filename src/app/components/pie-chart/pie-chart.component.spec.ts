import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PieChartComponent]
    });
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`ChartData has default value`, () => {
    expect(component.ChartData).toEqual([]);
  });

  it(`pieChartLabels has default value`, () => {
    expect(component.pieChartLabels).toEqual([]);
  });

  it(`pieChartData has default value`, () => {
    expect(component.pieChartData).toEqual([]);
  });

  it(`pieChartType has default value`, () => {
    expect(component.pieChartType).toEqual(`pie`);
  });
});
