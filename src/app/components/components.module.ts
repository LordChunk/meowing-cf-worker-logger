import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TreemapChartComponent } from './treemap-chart/treemap-chart.component';
import { UrlListComponent } from './url-list/url-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PieChartComponent,
    TreemapChartComponent,
    UrlListComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    PieChartComponent,
    TreemapChartComponent,
    UrlListComponent,
  ],
})
export class ComponentsModule { }
