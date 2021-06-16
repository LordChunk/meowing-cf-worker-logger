import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges {
  @Input() ChartData: PieChartInput[] = []
  @Input() Nothing: any = null;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      fullWidth: true,
      position: 'left',
    }
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
  }];

  ngOnChanges(changes: SimpleChanges) {
    if(changes.ChartData) {
      this.pieChartData = [];
      this.pieChartLabels = [];
      changes.ChartData.currentValue.forEach((chartInput: PieChartInput) => {
        this.pieChartData.push(chartInput.value);
        this.pieChartLabels.push(chartInput.label);
      });
    }
  }
}

export interface PieChartInput {
  label: string;
  value: number;
}
