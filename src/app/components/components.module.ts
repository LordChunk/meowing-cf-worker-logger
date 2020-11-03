import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPieComponent } from './country-pie/country-pie.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [CountryPieComponent, DashboardComponent],
  imports: [
    ChartsModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [
    CountryPieComponent,
    DashboardComponent,
  ],
})
export class ComponentsModule { }