import { Component, Input } from '@angular/core';
import { PieChartInput } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent {

  @Input() ChartData: PieChartInput[] = []
}
