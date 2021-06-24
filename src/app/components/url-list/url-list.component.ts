import { Component, Input, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { TreemapChartInput } from '../treemap-chart/treemap-chart.component';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() ListData: BehaviorSubject<TreemapChartInput[]> = new BehaviorSubject<TreemapChartInput[]>([]);


  displayedColumns: string[] = ['shortLabel', 'value', 'label'];

  sortData(sort: Sort) {
    const data = this.ListData.getValue().slice();
    if (!sort.active || sort.direction === '') {
      this.ListData.next(data);
      return;
    }

    const sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'label': return compare(a.label, b.label, isAsc);
        case 'shortLabel': return compare(a.shortLabel, b.shortLabel, isAsc);
        case 'value': return compare(a.value, b.value, isAsc);
        default: return 0;
      }
    });

    this.ListData.next(sortedData);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
