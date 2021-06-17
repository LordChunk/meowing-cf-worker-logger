import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
    MatExpansionModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
