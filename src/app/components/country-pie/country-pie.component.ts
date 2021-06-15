import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Observable, of } from 'rxjs';
import { StatisticsService } from 'src/services/api/services';

@Component({
  selector: 'app-country-pie',
  templateUrl: './country-pie.component.html',
  styleUrls: ['./country-pie.component.scss'],
})
export class CountryPieComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
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


  constructor(statisticsService: StatisticsService) {
    statisticsService.statisticsRequestsPerCountryGet().subscribe((res) => {
      res.forEach((reqPerCountry: {country: string, count: number  }, i: number) => {
        if(i > 10) {
          this.pieChartData[10] = this.pieChartData[10] + reqPerCountry.count;
          this.pieChartLabels[10] = "Remaining countries"
        } else {
          this.pieChartLabels.push(reqPerCountry.country);
          this.pieChartData.push(reqPerCountry.count);
        }
      });
    })
  }
}

export interface CountryInput {
  name: string;
  count: number;
}
