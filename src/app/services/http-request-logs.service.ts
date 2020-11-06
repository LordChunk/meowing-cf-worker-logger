import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryInput } from '../components/country-pie/country-pie.component';
import { CfRequestLog } from '../models/cf-request-log.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestLogsService {
  public logs: Observable<CfRequestLog[]>;
  public countryCount: Observable<Array<CountryInput>>;
  public totalRequestCount: Observable<number>;
  public bandWidthTotal: Observable<number>;
  public mostRequestedPaths: Observable<Array<{ path: string, count: number }>>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection<CfRequestLog>('logs', ref => ref.limit(1000)).valueChanges();

    // Run methods to map all public variables
    this.mapCountryCount();
    this.mapBandWidthTotal();
    this.mapMostRequestedPaths();
    this.mapTotalRequestCount();
   }

   private mapCountryCount(): void {
    this.countryCount = this.logs.pipe(
      map(logArray => {
        const countries = logArray.map(log => log.request.cf?.country);
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
   }

   private mapBandWidthTotal(): void {
    this.bandWidthTotal = this.logs.pipe(
      map(logArray => {
        let byteCount = 0;
        logArray.forEach(log => byteCount += +log.request.contentLength);
        return byteCount;
      }));
   }

   private mapMostRequestedPaths(): void {
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
   }

   private mapTotalRequestCount(): void {
    this.totalRequestCount = this.mostRequestedPaths.pipe(
      map(pathList => {
        let totalRequestCount = 0;
        pathList.forEach(path => totalRequestCount += +path.count);
        return totalRequestCount;
      })
    );
   }
}
