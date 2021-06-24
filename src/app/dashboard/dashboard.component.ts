import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import { StatisticsService } from 'src/services/api/services';
import { PieChartInput } from '../components/pie-chart/pie-chart.component';
import { TreemapChartInput } from '../components/treemap-chart/treemap-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public PieChartInput: PieChartInput[] = [];
  public TreemapChartInput: TreemapChartInput[] = [];
  public UrlListInput: BehaviorSubject<TreemapChartInput[]> = new BehaviorSubject<TreemapChartInput[]>([]);

  public readonly ReqPerUrlChartOpts: ChartOptions = {
    responsive: true,
  }

  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  ngOnInit(): void {
    // Fetch data for requests per country
    const maxCountries = 10;
    this.statisticsService.statisticsRequestsPerCountryGet().subscribe((res) => {
      const reqPerCountryData: PieChartInput[] = [];
      res.forEach((reqPerCountry: {country: string, count: number }, i: number): any => {
        if(i >= maxCountries) {
          reqPerCountryData[maxCountries - 1].value = reqPerCountryData[maxCountries - 1].value + reqPerCountry.count;
          reqPerCountryData[maxCountries - 1].label = "Other"
        } else {
          reqPerCountryData.push({
            label: reqPerCountry.country,
            value: reqPerCountry.count,
          });
        }
      });

      this.PieChartInput = reqPerCountryData;
    })

    // Fetch data for most popular URLs
    const maxUrls = 20;
    this.statisticsService.statisticsRequestsPerUrlGet().subscribe((res) => {
      const treemapInput: TreemapChartInput[] = [];
      const urlListInput: TreemapChartInput[] = [];
      res.forEach((reqUrl: {url: string, count: number }, i: number): any => {
        const treeMapObj: TreemapChartInput = {
          label: reqUrl.url,
          value: reqUrl.count,
          shortLabel: reqUrl.url.split('/').pop() || '',
        }
        if(i < maxUrls) {
          treemapInput.push(treeMapObj);
        }
        urlListInput.push(treeMapObj);
      });

      this.TreemapChartInput = treemapInput;
      this.UrlListInput.next(urlListInput);
    })
  }
}
