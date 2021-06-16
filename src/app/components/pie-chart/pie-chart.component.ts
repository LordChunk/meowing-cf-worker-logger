import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges {
  @Input() ChartData: PieChartInput[] = []
  @Input() ChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: string[] = [];
  public pieChartData: ChartDataset[] = [{
    data: [],
    backgroundColor: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']

  },];
  public pieChartType: ChartType = 'pie';

  ngOnChanges(changes: SimpleChanges) {
    if(changes.ChartData) {
      this.pieChartLabels = [];
      this.pieChartData[0].data = [];

      changes.ChartData.currentValue.forEach((chartInput: PieChartInput) => {
        this.pieChartData[0].data.push(chartInput.value);
        this.pieChartLabels.push(chartInput.label);
      });
    }
  }
}

export interface PieChartInput {
  label: string;
  value: number;
}
