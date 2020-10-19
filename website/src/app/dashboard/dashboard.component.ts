import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CfRequestLog } from '../models/cf-request-log.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  logs: Observable<CfRequestLog[]>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection<CfRequestLog>('logs').valueChanges();
  }
}
