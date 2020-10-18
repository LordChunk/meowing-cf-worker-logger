import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  logs: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.logs = firestore.collection('logs').valueChanges();
  }
}
