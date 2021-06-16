import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
  ],
  exports: [
    PieChartComponent,
  ],
})
export class ComponentsModule { }
