import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
// @ts-ignore
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { PieChartInput } from '../pie-chart/pie-chart.component';


@Component({
  selector: 'app-treemap-chart',
  templateUrl: './treemap-chart.component.html',
  styleUrls: ['./treemap-chart.component.scss', '../chart-loading-background.scss']
})
export class TreemapChartComponent implements AfterViewInit {

  @Input() ChartData: TreemapChartInput[] = []

  @ViewChild('treemap') treemapElement: ElementRef<HTMLInputElement> | undefined;
  private chart: any;

  ngAfterViewInit(): void {
    Chart.register(TreemapController, TreemapElement);

    const ctx = this.treemapElement?.nativeElement;

    // @ts-ignore
    this.chart = new Chart(ctx, {
      // @ts-ignore
      type: 'treemap',
      data: {
        datasets: [{
          // label: 'Basic treemap',
          // @ts-ignore
          tree: [],
          color: '#FFF',
          key: "value",
          groups: ['shortLabel'],
          // @ts-ignore
          backgroundColor: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
          rtl: false // control in which direction the squares are positioned
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (item: any) => {
                let i = item[0].dataIndex - 1;
                if(i < 0) i = item[0].dataset.tree.length - 1;

                return item[0].dataset.tree[i].shortLabel;
              },
              label: (item: any) => {
                let i = item.dataIndex - 1;
                if(i < 0) i = item.dataset.tree.length - 1;

                return [`URL: ${item.dataset.tree[i].label}`, `Requests: ${item.dataset.tree[i].value}`];
              },
            }
          },
        },
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.ChartData && this.chart) {
      this.chart.data.datasets[0].tree = changes.ChartData.currentValue;
      this.chart.update();
    }
  }
}

export interface TreemapChartInput extends PieChartInput {
  shortLabel: string;
}
