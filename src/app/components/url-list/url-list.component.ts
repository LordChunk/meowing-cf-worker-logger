import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Observable, of } from 'rxjs';
import { TreemapChartInput } from '../treemap-chart/treemap-chart.component';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() ListData: Observable<TreemapChartInput[]> = of([]);

  displayedColumns: string[] = ['shortLabel', 'value', 'label'];
}
