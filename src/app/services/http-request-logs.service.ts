import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as signalR from '@aspnet/signalr';

import { CountryInput } from '../components/country-pie/country-pie.component';
import { HttpLog } from '../models/cf-request-log.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestLogsService {
  // tslint:disable-next-line: variable-name
  private _logs: ReplaySubject<HttpLog[]>;
  get logs(): Observable<HttpLog[]> {
    return this._logs;
  }
  public countryCount: Observable<Array<CountryInput>>;
  public totalRequestCount: Observable<number>;
  public bandWidthTotal: Observable<number>;
  public mostRequestedPaths: Observable<Array<{ path: string, count: number }>>;

  private hubConnection: signalR.HubConnection;

  constructor(firestore: AngularFirestore) {
    // this.logs = firestore.collection<CfRequestLog>('logs', ref => ref.limit(1000)).valueChanges();
    this._logs = new ReplaySubject(1);

    // Run methods to map all public variables
    this.mapCountryCount();
    this.mapBandWidthTotal();
    this.mapMostRequestedPaths();
    this.mapTotalRequestCount();

    // Start signalR connection
    this.startConnection();
    // this.hubConnection.send('test');
    this.addLogUpdateListener();
   }

   private startConnection()  {
     this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiEndPoint}hub/http-request`)
      .build();

     this.hubConnection.start()
        .then(console.log)
        .catch(console.error);
   }

   public addLogUpdateListener = () => {
     this.hubConnection.on('GetLogUpdates', (data: number[]) => {
      console.log(data);
     });
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
