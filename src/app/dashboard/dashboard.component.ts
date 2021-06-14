import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatisticsService } from '../../services/api/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService){
    this.statisticsService = statisticsService;
  }

  ngOnInit(): void {
    this.statisticsService.statisticsRequestsPerCountryGet().subscribe(console.log)
  }


}
