import { Component } from '@angular/core';
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
export class DashboardComponent {
  public logs: Observable<CfRequestLog[]>;
  public countryCount: Observable<Array<CountryInput>>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection<CfRequestLog>('logs').valueChanges();

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
      }));
  }
}
