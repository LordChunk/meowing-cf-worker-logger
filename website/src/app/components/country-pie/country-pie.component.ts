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

  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [];

  ngOnInit(): void {
    this.countries.subscribe(countries => {
      this.pieChartLabels = [];
      this.pieChartData = [];
      countries.forEach(country => {
        this.pieChartLabels.push(country.name);
        this.pieChartData.push(country.count);
      });
    });
  }

}

export interface CountryInput {
  name: string;
  count: number;
}
