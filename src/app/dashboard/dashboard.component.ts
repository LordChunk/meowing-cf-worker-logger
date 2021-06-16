import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/services/api/services';
import { PieChartInput } from '../components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public RequestsPerCountry: PieChartInput[] = [];

  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  ngOnInit(): void {
    this.statisticsService.statisticsRequestsPerCountryGet().subscribe((res) => {
      const reqPerCountryData: PieChartInput[] = [];
      res.forEach((reqPerCountry: {country: string, count: number  }, i: number): any => {
        if(i >= 10) {
          reqPerCountryData[9].value = reqPerCountryData[9].value + reqPerCountry.count;
          reqPerCountryData[9].label = "Other"
        } else {
          reqPerCountryData.push({
            label: reqPerCountry.country,
            value: reqPerCountry.count,
          });
        }
      });

      this.RequestsPerCountry = reqPerCountryData;
    })
  }
}
