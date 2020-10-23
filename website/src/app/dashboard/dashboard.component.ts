import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryInput } from '../components/country-pie/country-pie.component';
import { CfRequestLog } from '../models/cf-request-log.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public logs: Observable<CfRequestLog[]>;
  public countryCount: Observable<Array<CountryInput>>;
  public totalRequestCount: Observable<number>;

  public bandWidthTotal: Observable<number>;
  public mostRequestedPaths: Observable<Array<{ path: string, count: number }>>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection<CfRequestLog>('logs').valueChanges();
  }

  ngOnInit(): void {
    this.countryCount = this.logs.pipe(
      map(logArray => {
        const countries = logArray.map(log => log.request.cf.country);
        const countryNameCount: Array<CountryInput> = [];

        countries.forEach(countryName => {
          const country = countryNameCount.find(item => item.name === countryName);
          if (country !== undefined) {
            country.count++;
          } else {
            countryNameCount.push({ name: countryName, count: 1 });
          }
        });

        return countryNameCount.sort((a, b) => b.count - a.count);
      }
      ));

    this.bandWidthTotal = this.logs.pipe(
      map(logArray => {
        let byteCount = 0;
        logArray.forEach(log => byteCount += +log.request.contentLength);
        return byteCount;
      }));

    this.mostRequestedPaths = this.logs.pipe(
      map(logArray => {
        const mostRequestedArray: Array<{ path: string, count: number }> = [];
        logArray.forEach((log, i) => {
          const url = log.request.url.split('https://meowingdalmatian.chu.mk/').pop().split('?')[0];
          const requestItem = mostRequestedArray.find(item => item.path === url);
          if (requestItem !== undefined) {
            requestItem.count++;
          } else {
            mostRequestedArray.push({ path: url, count: 1 });
          }
        });
        return mostRequestedArray.sort((a, b) => b.count - a.count).slice(0, 10);
      }
    ));

    this.totalRequestCount = this.mostRequestedPaths.pipe(
      map(pathList => {
        let totalRequestCount = 0;
        pathList.forEach(path => totalRequestCount += +path.count);
        return totalRequestCount;
      })
    );
  }

  public countryPieStyle = {
    width: '40vw',
    // height: '40vh',
  };
}
