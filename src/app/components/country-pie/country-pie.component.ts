import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-pie',
  templateUrl: './country-pie.component.html',
  styleUrls: ['./country-pie.component.scss'],
})
export class CountryPieComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() countries: Observable<CountryInput[]>;
  @Input() pieStyle;

  public pieChartMaxSegments = 6;
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    }];

  ngOnInit(): void {
    this.countries.subscribe(countries => {
      this.pieChartLabels = [];
      this.pieChartData = [];

      let remaining = 0;
      countries.forEach((country, i) => {
        if (i <= this.pieChartMaxSegments) {
          this.pieChartLabels.push(country.name);
          this.pieChartData.push(country.count);
        } else {
          remaining += country.count;
        }
      });

      if (remaining > 0) {
        this.pieChartLabels.push('Remaining countries');
        this.pieChartData.push(remaining);
      }
    });
  }

}

export interface CountryInput {
  name: string;
  count: number;
}
