import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInput } from '../components/country-pie/country-pie.component';
import { HttpRequestLogsService } from '../services/http-request-logs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public countryCount: Observable<Array<CountryInput>>;
  public totalRequestCount: Observable<number>;

  public bandWidthTotal: Observable<number>;
  public mostRequestedPaths: Observable<Array<{ path: string, count: number }>>;

  constructor(private httpRequestLogsService: HttpRequestLogsService) {
    this.bandWidthTotal = httpRequestLogsService.bandWidthTotal;
    this.countryCount = httpRequestLogsService.countryCount;
    this.mostRequestedPaths = httpRequestLogsService.mostRequestedPaths;
    this.totalRequestCount = httpRequestLogsService.totalRequestCount;
  }

  ngOnInit(): void {
  }

  public countryPieStyle = {
    width: '40vw',
    // height: '40vh',
  };
}
