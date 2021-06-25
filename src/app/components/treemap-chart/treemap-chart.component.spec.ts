import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { TreemapChartComponent } from './treemap-chart.component';

describe('TreemapChartComponent', () => {
  let component: TreemapChartComponent;
  let fixture: ComponentFixture<TreemapChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TreemapChartComponent]
    });
    fixture = TestBed.createComponent(TreemapChartComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`ChartData has default value`, () => {
    expect(component.ChartData).toEqual([]);
  });
});
