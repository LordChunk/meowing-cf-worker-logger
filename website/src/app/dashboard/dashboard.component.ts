import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { CfRequestLog } from '../models/cf-request-log.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public logs: Observable<CfRequestLog[]>;
  public countryCount: Observable<Array<{ country: string, count: number }>>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection<CfRequestLog>('logs').valueChanges();

    this.countryCount = this.logs.pipe(
      map(logArray => {
        const countries = logArray.map(log => log.request.cf.country);
        const countryNameCount: Array<{ country: string, count: number }> = [];

        countries.forEach(countryName => {
          const country = countryNameCount.find(item => item.country === countryName);
          if (country !== undefined) {
            country.count++;
          } else {
            countryNameCount.push({ country: countryName, count: 1 });
          }
        });

        return countryNameCount.sort((a, b) => b.count - a.count);
      }));
  }
}
