import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TreemapChartComponent } from './treemap-chart/treemap-chart.component';


@NgModule({
  declarations: [
    PieChartComponent,
    TreemapChartComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
  ],
  exports: [
    PieChartComponent,
    TreemapChartComponent,
  ],
})
export class ComponentsModule { }
