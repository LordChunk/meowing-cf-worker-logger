import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { StatisticsService } from 'src/services/api/services';
import { PieChartInput } from '../components/pie-chart/pie-chart.component';
import { TreemapChartInput } from '../components/treemap-chart/treemap-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public RequestsPerCountry: PieChartInput[] = [];
  public RequestsPerUrl: TreemapChartInput[] = [];
  public readonly ReqPerUrlChartOpts: ChartOptions = {
    responsive: true,
  }

  @ViewChild('urlListWrapper', { read: ViewContainerRef }) urlListWrapper!: ViewContainerRef;
  private isUrlListWrapperInstantiated = false;

  constructor(
    private statisticsService: StatisticsService,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
  ) { }

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

      this.RequestsPerCountry = reqPerCountryData;
    })

    // Fetch data for most popular URLs
    const maxUrls = 20;
    this.statisticsService.statisticsRequestsPerUrlGet().subscribe((res) => {
      const reqPerUrl: TreemapChartInput[] = [];
      res.forEach((reqUrl: {url: string, count: number }, i: number): any => {
        if(i >= maxUrls) {
          // reqPerUrl[maxUrls - 1].value = reqPerUrl[maxUrls - 1].value + reqUrl.count;
          // reqPerUrl[maxUrls - 1].label = "Other"
          // reqPerUrl[maxUrls - 1].shortLabel = "Other"
        } else {
          reqPerUrl.push({
            label: reqUrl.url,
            value: reqUrl.count,
            shortLabel: reqUrl.url.split('/').pop() || '',
          });
        }
      });

      this.RequestsPerUrl = reqPerUrl;
    })
  }

  public async lazyLoadComponent() {
    if (this.isUrlListWrapperInstantiated) return;
    const { UrlListComponent } = await import('../components/url-list/url-list.component');
    const urlListFactory = this.cfr.resolveComponentFactory(UrlListComponent);
    const { instance } = this.urlListWrapper.createComponent(urlListFactory, undefined, this.injector)
    this.isUrlListWrapperInstantiated = true;
  }
}
