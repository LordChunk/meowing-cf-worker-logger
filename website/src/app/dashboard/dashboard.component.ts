import { Component } from '@angular/core';
import { NAVITEMS } from '../models/nav-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // Set as property so it can be used in html file
  navItems = NAVITEMS;
}
