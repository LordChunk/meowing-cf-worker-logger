import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
