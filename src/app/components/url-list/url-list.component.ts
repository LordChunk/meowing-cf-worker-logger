import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { TreemapChartInput } from '../treemap-chart/treemap-chart.component';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() inputData: Observable<TreemapChartInput[]> = of([])

  tableData: MatTableDataSource<TreemapChartInput> = new MatTableDataSource();
  displayedColumns: string[] = ['shortLabel', 'value', 'label'];


  ngOnInit() {
    this.inputData.subscribe((newListData) => {
      this.tableData.data = newListData;
    });
  }

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
  }
}

